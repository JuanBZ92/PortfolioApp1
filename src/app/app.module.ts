import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
const firebaseConfig = {
  apiKey: "AIzaSyCtaqCy9Qpv9L2COMw8zME_IoYIcITzY20",
  authDomain: "portfolio-app-1-abe05.firebaseapp.com",
  databaseURL: "https://portfolio-app-1-abe05-default-rtdb.firebaseio.com",
  projectId: "portfolio-app-1-abe05",
  storageBucket: "portfolio-app-1-abe05.appspot.com",
  messagingSenderId: "959477364407",
  appId: "1:959477364407:web:a5c23243edaee890e5ff32",
  measurementId: "G-XHCV3B9Y5W"
};*/