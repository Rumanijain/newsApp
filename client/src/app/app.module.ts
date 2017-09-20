import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { Headers, Http,Response } from '@angular/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { FavouritelistComponent } from './favouritelist/favouritelist.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainnavBarComponent } from './mainnav-bar/mainnav-bar.component';
import { AppRoutingModule }     from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HerounitComponent } from './herounit/herounit.component';

@NgModule({
  declarations: [    //Decleration of Components
    AppComponent,
    SearchComponent,
    SearchListComponent,
    SearchDetailComponent,
    FavouritelistComponent,
    FavouriteComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MainnavBarComponent,
    FooterComponent,
    HomepageComponent,
    JumbotronComponent,
    HerounitComponent,
  ],
  imports: [    //Imports required
    BrowserModule,
    HttpModule,
    FormsModule,
       AppRoutingModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
