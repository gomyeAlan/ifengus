//
//  SideMenuHeaderView.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/18/21.
//

import SwiftUI

struct SideMenuHeaderView: View {
    @Binding var isShowing : Bool
    
    var body: some View {
        ZStack(alignment: .topTrailing) {
            
            Button(action: {
                withAnimation(.spring()){
                    isShowing.toggle()
                }
            }, label: {
                Image(systemName: "xmark")
                    .frame(width: 32, height: 32)
                    .foregroundColor(.white)
                    .padding()
            })
            
            VStack(alignment: .leading){
                Image("rainnight-s")
                    .resizable()
                    .scaledToFill()
                    .clipped()
                    .frame(width: 64, height: 64)
                    .clipShape(Circle())
                    .padding(.bottom,16)
                    
                
                Text("Alan")
                    .font(.system(size: 24, weight:.semibold))
                Text("@vv")
                    .font(.system(size: 14))
                    .padding(.bottom, 15)
                
                HStack(spacing:12){
                    HStack(spacing:4){
                        Text("123").bold()
                        Text("Following")
                    }
                    HStack(spacing:4){
                        Text("13323").bold()
                        Text("Following")
                    }
                    Spacer()
                }
                Spacer()
            }.padding()
        }
    }
}

struct SideMenuHeaderView_Previews: PreviewProvider {
    static var previews: some View {
        SideMenuHeaderView(isShowing: .constant(true))
    }
}
