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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CenterLayoutComponent } from './center-layout/center-layout.component';
import { CommonModule } from '@angular/common';

import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftMenuComponent,
    ShowAllComponent,
    FolderComponent,
    FileComponent,
    TopMenuComponent,
    CenterLayoutComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
