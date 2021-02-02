//
//  ifengus_v20App.swift
//  ifengus_v20
//
//  Created by Alan Yang on 1/17/21.
//

import SwiftUI

@main
struct ifengus_v20App: App {
    let persistenceController = PersistenceController.shared
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
