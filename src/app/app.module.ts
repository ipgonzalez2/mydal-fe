import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { FolderComponent } from './folder/folder.component';
import { FileComponent } from './file/file.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CenterLayoutComponent } from './center-layout/center-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftMenuComponent,
    ShowAllComponent,
    FolderComponent,
    FileComponent,
    TopMenuComponent,
    CenterLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
