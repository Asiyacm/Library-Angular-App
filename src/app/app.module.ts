import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const myRoute:Routes=[
{
  path: "",
  component:AdminLoginComponent
},
{
  path:"signup",
  component:UserSignupComponent
},
{
  path:"Userlogin",
  component:UserLoginComponent
},
{
  path:"entry",
  component:BookEntryComponent
},

{
  path:"view",
  component:BookViewComponent
},

{
  path:"search",
  component:BookSearchComponent
},
{
  path:"delete",
  component:BookDeleteComponent
},

{
  path:"edit",
  component:BookEditComponent
},

{
  path:"issue",
  component:BookIssueComponent
}

  
   


]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserSignupComponent,
    BookEntryComponent,
    BookViewComponent,
    BookSearchComponent,
    BookDeleteComponent,
    BookEditComponent,
    BookIssueComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
