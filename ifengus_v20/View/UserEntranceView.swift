//
//  PersonalView.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/23/21.
//

import SwiftUI

struct UserEntranceView: View {
    @ObservedObject var accountmanager = AccountViewModel()
    @ObservedObject var loginmanager: LoginViewManager = LoginViewManager()
    @State var username = ""
    @State var password = ""
    @State var returnmsg = ""
    var body: some View {
        VStack{
            if accountmanager.isFlag {
                Button("点我退出")
                {
                    self.accountmanager.isFlag.toggle()
                }
            } else {
                Form {
                    Section {
                        TextField("Username", text: $username)
                        TextField("Password", text: $password)
                    }
                    Section
                    {
                        Button("Login") {
                       //     self.loginVaild(username: username, password: password)
                        }
                    }
                    .disabled(username.isEmpty || password.isEmpty)
                    Text(self.returnmsg)
                        .disabled(self.returnmsg.isEmpty)
                }
            }
        }
    }
    

}
    
