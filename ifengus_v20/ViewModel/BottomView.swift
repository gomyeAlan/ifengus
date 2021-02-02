//
//  BottomView.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/18/21.
//

import SwiftUI

struct BottomView: View {
    @State private var selected = 0
    
    var channelUrl: String 

    var body: some View {
        ZStack {
            VStack{
                TabView() {
                    //WebViewShow(channelUrl:channelUrl)
                    ListView()
                    .tabItem {
                Image(systemName: (selected == 0 ? "house.fill" : "house"))
                Text("Menu")
                }
     
                
                    SideMenuView(isShowing: .constant(true))
                        
                        .tabItem {
                Image(systemName: (selected == 1 ? "list.bullet.rectangle" : "list.bullet"))
                Text("Menu")
              }
     
                    WebViewShow(channelUrl:channelUrl)
                .tabItem {
                Image(systemName: (selected == 2 ? "heart.fill" : "heart"))
                Text("Favorite")
              }
                
                    LoginView()
                        .tabItem {
                Image(systemName: (selected == 3 ? "person.fill" : "person"))
                Text("Profile")
              }

            }
            }

        }

    }
}

struct BottomView_Previews: PreviewProvider {
    static var previews: some View {
        BottomView(channelUrl:"https://www.ifengus.com")
    }
}
