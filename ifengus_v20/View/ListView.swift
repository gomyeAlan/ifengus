//
//  ListView.swift
//  ifengus_v20
//
//  Created by Alan Yang on 2/2/21.
//

import SwiftUI

struct ListView: View {
    @ObservedObject var listManager = ListManager()
    var channelID: Int

    var body: some View {
        NavigationView {
                VStack(spacing: 0) {
                    ForEach(listManager.lists){ list in
                            Row(list: list)
                    }
                }
            }
            .navigationBarTitle("\(channelID)", displayMode: .inline)
            .onAppear{
                listManager.getListContent(pid: channelID)
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


struct ListView_Previews: PreviewProvider {
    static var previews: some View {
        ListView(channelID: 2)
    }
}
