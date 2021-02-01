//
//  LoadingView.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/20/21.
//

import SwiftUI

struct LoadingView: View {
    var body: some View {
        ZStack{
            Rectangle().frame(width: 100, height: 100, alignment: .center)
                .background(Color.gray).opacity(0.1).cornerRadius(15)
            ProgressView("加载中...").progressViewStyle(CircularProgressViewStyle())
        }
    }
}

struct LoadingView_Previews: PreviewProvider {
    static var previews: some View {
        LoadingView()
    }
}
