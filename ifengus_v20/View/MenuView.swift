//
//  MenuView.swift
//  ifengus_v20
//
//  Created by Alan Yang on 2/3/21.
//

import SwiftUI

struct MenuView: View {
    @ObservedObject var channelmanager = ChannelManager()
    @State private var searchTerm : String = ""
    
    
    var body: some View {
        VStack {
            SearchBar(text: $searchTerm)
                .padding(EdgeInsets(top: 0, leading: 10, bottom: 5, trailing: 10))

            List(channelmanager.channels) { channel in
         
                    Image(systemName: ("arrowshape.zigzag.forward"))
                        .foregroundColor(.gray)
                    NavigationLink(destination:ListView( channelID: channel.id)){
                        Text("\(channel.name)")
                                 }
                        .font(.system(size: 20))
                    .foregroundColor(.black)
             }
        }
    }
}

struct MenuView_Previews: PreviewProvider {
    static var previews: some View {
        MenuView()
    }
}
