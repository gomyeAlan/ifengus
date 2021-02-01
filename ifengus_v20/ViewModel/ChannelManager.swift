//
//  ChannelManager.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/17/21.
//

import Foundation

class ChannelManager :ObservableObject  {
    
    //建立一个集合
    @Published var channels = [Channels]()
    
    
    var indices: Int = 0
    
    init(){
        getChannelName(pid:0)
    }
    
    func getChannelName(pid:Int) {

           let url = URL(string: "https://ifengus.com/index/channeltree/getchildtree?pid=0")!
       
           URLSession.shared.dataTask(with: url) {(data,response,error) in
               do {
                   if let d = data {
                       let decodedLists = try JSONDecoder().decode([Channels].self, from: d)
                       DispatchQueue.main.async {
                           self.channels = decodedLists
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

