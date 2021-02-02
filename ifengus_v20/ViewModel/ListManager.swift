//
//  ListManager.swift
//  ifengus_v20
//
//  Created by Alan Yang on 2/2/21.
//

import Foundation

class ListManager :ObservableObject  {
    
    //建立一个集合
    @Published var lists = [Lists]()

    var indices: Int = 1
    
    init(){
        getListContent(pid:1)
    }
    
    func getListContent(pid:Int) {

           let url = URL(string: "https://www.ifengus.com/api/cms/archives?cid=17&limite=10&apitoken=hiRNzRjQ!x2x@H@X")!
       
           URLSession.shared.dataTask(with: url) {(data,response,error) in
               do {
                   if let d = data {
                       let decodedLists = try JSONDecoder().decode([Lists].self, from: d)
                       DispatchQueue.main.async {
                           self.lists = decodedLists
                       }
                   }else {
                       print("No Data")
                   }
               } catch {
                   print ("Error")
               }
               
           }.resume()
            
}
}

