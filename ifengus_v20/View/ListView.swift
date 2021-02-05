//
//  ListView.swift
//  ifengus_v20
//
//  Created by Alan Yang on 2/2/21.
//

import SwiftUI
import UIKit

struct ListView: View {
    @ObservedObject var listManager = ListManager()
    @StateObject private var model = MyTestModel()

    
    var channelID: Int
    var body: some View {
        NavigationView {
            MCRefreshableVerticalScrollView(refreshing: self.$model.loading) {
                VStack(spacing: 0) {
                    ForEach( listManager.lists ) { list in
                        Row(lists: list)
                    }
                }
            }
            .navigationBarTitle("我的文章", displayMode: .inline)
        }
    }
    }

    

struct Row: View {
    @StateObject private var imageLoader = CoverImageLoader()

    let lists: Lists

    var body: some View {
        ZStack(alignment: .bottom) {
            HStack {
                if imageLoader.image != nil {
                    Image(uiImage: imageLoader.image!)
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 100, height: 120)
                        .clipped()
                        .padding(10)
                } else {
                    RoundedRectangle(cornerRadius: 5)
                        .foregroundColor(.secondary)
                        .frame(width: 100, height: 120)
                }
                

                VStack(alignment: .leading, spacing: 10) {
                    Text(lists.title)
                        .font(.headline)
                        .foregroundColor(.primary)
                        .lineLimit(1)
                    HStack {
                        Spacer()
                        Image(systemName: "eye")
                            .foregroundColor(.gray)
                            .imageScale(.small)
                        Text("\(lists.views)")
                            .foregroundColor(.gray)
                        Image(systemName: "hand.thumbsup")
                            .foregroundColor(.gray)
                            .imageScale(.small)
                        Text("\(lists.likes)")
                            .foregroundColor(.gray)
                        Image(systemName: "bubble.right")
                            .foregroundColor(.gray)
                            .imageScale(.small)
                        Text("\(lists.comments)")
                            .foregroundColor(.gray)
                    }
                }
            }
            .padding(.horizontal, 10)

            Divider()
        }
        .onAppear {
            imageLoader.load(lists.image)
        }
    }
}


class CoverImageLoader: ObservableObject {
    @Published var image: UIImage? = nil

    func load(_ imgName: String) {
        URLSession.shared.dataTask(with: URL(string: imgName)!) { data, _, _ in
            if let d = data {
                DispatchQueue.main.async {
                    self.image = UIImage(data: d) ?? UIImage(named: "")
                }
            }
        }
        .resume()
    }
}

class MyTestModel: ObservableObject {
    @Published var loading: Bool = false {
        didSet {
            if oldValue == false, loading == true {
                load()
            }
        }
    }

    @Published var articleArray: [Article] = articles

    func load() {
        DispatchQueue.main.asyncAfter(deadline: .now() + .seconds(4)) {
            self.loading = false
            self.articleArray.shuffle()
        }
    }
}



struct ListView_Previews: PreviewProvider {
    static var previews: some View {
        ListView(channelID: 2)
    }
}
