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





enum SideMenuViewModel: Int, CaseIterable {
    case profile
    case lists
    case bookmarks
    case messages
    case notifications
    case logot
    
    var tilte : String{
        switch self {
        case .profile: return "Profile"
        case .lists: return "Lists"
        case .bookmarks: return "Bookmarks"
        case .messages: return "Messages"
        case .notifications: return "Notifications"
        case .logot: return "Logot"
        }
    }
    
    var imageName: String{
        switch self {
        case .profile: return "person"
        case .lists: return "list.bullet"
        case .bookmarks: return "bookmark"
        case .messages: return "bubble.left"
        case .notifications: return "bell"
        case .logot: return "arrow.left.square"
        }
    }
    
}

struct LoginUserData:Codable {
    let id: Int
    let username: String
    let nickname: String
    let mobile: String
    let avatar: String
    let score: Int
    let token: String
    let user_id: Int
    let createtime: Int
    let expiretime: Int
    let expires_in: Int
}
