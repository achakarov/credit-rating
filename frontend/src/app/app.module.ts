import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NewCreditComponent } from './new-credit/new-credit.component';

import { UserService } from './services/user-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    NewCreditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
