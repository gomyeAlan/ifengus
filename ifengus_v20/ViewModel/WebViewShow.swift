//
//  WebViewShow.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/17/21.
//

import Foundation
import SwiftUI
import WebKit

struct WebViewShow: UIViewRepresentable {
    //var url: String
   var channelUrl: String //定义公共变量Url

    
    func makeUIView(context: Context) -> WKWebView {
        guard let url = URL(string: self.channelUrl) else {
        
            return WKWebView()
        }
        let requset = URLRequest(url:url)
        //print(url)
       // print(channelUrl)
        
        let wkWebview = WKWebView()
        wkWebview.load(requset)
        return wkWebview
        }
    
    
    
    func updateUIView(_ uiView: WebViewShow.UIViewType, context: UIViewRepresentableContext<WebViewShow>) {
        
    }
}
