//
//  ListManager.swift
//  ifengus_v20
//
//  Created by Alan Yang on 2/2/21.
//

import Foundation

struct isresponsearchives: Codable {
    let code: Int
    let msg: String
    let time: String
    let data: [Lists]?
}

class ListManager :ObservableObject  {
    
    //建立一个集合
    @Published var lists = [Lists]()

    var indices: Int = 2
    
    init(){
        getListContent(pid:indices)
    }
    
    func getListContent(pid:Int) {
       let url = URL(string: "https://www.ifengus.com/api/cms/archives?cid=\(pid)&limite=30&type=son&apitoken=hiRNzRjQ!x2x@H@X")!
       URLSession.shared.dataTask(with: url) {(data,response,error) in
           do {
            if let d = data {
                let decodedLists = try JSONDecoder().decode(isresponsearchives.self, from: d)
                if (decodedLists.code == 1){
                    DispatchQueue.main.async {
                        self.lists = decodedLists.data!
                    }
                } else {
                    print("data build error")
                }
            } else {
               print("No Data")
            }
           } catch {
               print ("Error")
           }
       }.resume()
    }
}

