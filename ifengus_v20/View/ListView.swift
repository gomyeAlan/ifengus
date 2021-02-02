//
//  ListView.swift
//  ifengus_v20
//
//  Created by Alan Yang on 2/2/21.
//

import SwiftUI

struct ListView: View {
    @StateObject private var model = MyTestModel()
    @ObservedObject var listManager = ListManager()


    var body: some View {
        NavigationView {
            MCRefreshableVerticalScrollView(refreshing: self.$model.loading) {
                VStack(spacing: 0) {
//                    ForEach(model.articleArray) { article in
//                        Row(article: article)
//                    }
                    //cell
                    ForEach(listManager.lists){ list in
                            Row(list: list)
                    }
                }
            }
            .navigationBarTitle("我的文章", displayMode: .inline)
        }
    }
}

struct Row: View {
    @StateObject private var imageLoader = CoverImageLoader()
  
    //let article: Article
    let list: Lists

    var body: some View {
        ZStack(alignment: .bottom) {
            HStack {
                
                if imageLoader.image != nil {
                    Image(uiImage: imageLoader.image!)
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 80, height: 120)
                        .clipped()
                } else {
                    RoundedRectangle(cornerRadius: 5)
                        .foregroundColor(.secondary)
                        .frame(width: 80, height: 120)
                }
                

                VStack(alignment: .leading, spacing: 10) {
                    Text(list.title)
                        .font(.headline)
                        .foregroundColor(.primary)
                        .lineLimit(1)

                    Text(list.description)
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                        .lineLimit(3)
                        .multilineTextAlignment(.leading)
                }
            }
            .padding(.horizontal, 10)

            Divider()
        }
        .onAppear {
            imageLoader.load(list.image)
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

extension View {
    func debug() -> Self {
        print(Mirror(reflecting: self).subjectType)
        return self
    }
}


struct ListView_Previews: PreviewProvider {
    static var previews: some View {
        ListView()
    }
}
