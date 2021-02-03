//
//  MenuView.swift
//  ifengus_v20
//
//  Created by Alan Yang on 2/3/21.
//

import SwiftUI

struct MenuView: View {
    @ObservedObject var channelmanager = ChannelManager()
    
    
    var body: some View {
        VStack {
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
