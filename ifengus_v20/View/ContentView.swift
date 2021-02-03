//
//  ContentView.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/17/21.
//

import SwiftUI

struct ContentView: View {
    @State private var isShowing = false
    
    
    var body: some View {
        NavigationView {
            ZStack {
                if isShowing{
                    SideMenuView(isShowing: $isShowing)
                }
                
                VStack {
                    BottomView(channelID:2)
                        .cornerRadius(isShowing ? 20 : 10)
                        .offset(x: isShowing ? 300 : 0, y: isShowing ? 44 : 0)
                        .scaleEffect(isShowing ? 0.8 : 1)
                        .navigationBarItems(leading: Button(action:{
                            withAnimation(.spring()){
                                isShowing.toggle()
                            }
                        } , label: {
                            Image(systemName: "list.bullet")
                                .foregroundColor(.black)
                        }))
                        .navigationTitle("凤凰美洲网")
                        .navigationBarTitleDisplayMode(.inline)
                  
                }
            }
            .ignoresSafeArea()
           
            .onAppear{
                isShowing = false
            }
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

struct HomeView: View {
    var body: some View {
        ZStack {
            Color(.white)
            //WebViewShow(channelUrl:"https://www.ifengus.com")
            ListView(channelID: 2)
            .padding()
            
        }

    }
}
