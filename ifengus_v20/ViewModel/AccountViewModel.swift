//
//  AccountViewModel.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/25/21.
//

import Foundation

class AccountViewModel: ObservableObject {
    @Published var isFlag: Bool
    
    init(isFlagTest: Bool = false) {
        if isFlagTest {
            self.isFlag = true
        } else {
            self.isFlag = false
        }
    }
    
}
