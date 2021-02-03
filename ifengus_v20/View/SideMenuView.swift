//
//  SideMenu.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/17/21.
//

import SwiftUI

struct SideMenuView: View {
    
    @Binding var isShowing : Bool
    @ObservedObject var channelmanager = ChannelManager()

    var body: some View {
        ZStack{
            //背景渐变色
            LinearGradient(gradient: Gradient(colors: [Color.blue, Color.purple]), startPoint: .top, endPoint: .bottom)
            //忽略安全区
                .ignoresSafeArea()
            
            VStack{
                // header
                SideMenuHeaderView(isShowing: $isShowing)
                    .frame(height:200)
                
                //cell
                ForEach(channelmanager.channels){ channel in
                    NavigationLink(
                        
                        destination: //BottomView(channelUrl:channel.url)
                            BottomView(channelID:channel.id),
                        label: {
                           //SideMenuOptionView(viewModel: channel)
                            
                            HStack(spacing: 16){
                                
                                Image(systemName: "chevron.right")
                                    .frame(width: 24, height: 24)
                                Text(channel.name)
                                    .font(.system(size: 15, weight: .semibold))
                                Spacer()
                            }
                            .foregroundColor(.white)
                            .padding(EdgeInsets(top: 0, leading: 20, bottom: 5, trailing: 0))

                        }
                    )
                }
                
                //SideMenuOptionView()
 
                Spacer()
            }
        }.navigationBarHidden(true)
        
    }
}

struct SideMenuView_Previews: PreviewProvider {
    static var previews: some View {
        SideMenuView(isShowing: .constant(true))
    }
}
