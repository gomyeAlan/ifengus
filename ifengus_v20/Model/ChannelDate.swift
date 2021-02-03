//
//  ChannelDate.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/17/21.
//

import Foundation

struct Channels: Codable, Identifiable {
   public var id: Int
   public var name: String
   public var parent_id: Int
   public var url: String
   
   enum CodingKeys: String, CodingKey {
          case id = "id"
          case name = "name"
          case parent_id = "parent_id"
          case url = "url"
   
       }
}




