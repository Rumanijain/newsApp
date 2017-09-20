import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouritelistComponent } from './favouritelist/favouritelist.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MainnavBarComponent } from './mainnav-bar/mainnav-bar.component';
import {JumbotronComponent} from './jumbotron/jumbotron.component';
import {HomepageComponent} from './homepage/homepage.component';

const appRoutes: Routes = [			//Routes Required
{path:'' , redirectTo: '/Main' ,pathMatch:'full'},
{path:'Main', component:JumbotronComponent},
{path: 'Register', component:SignupComponent},
{path: 'Login', component:LoginComponent},
{path: 'Home', component:HomeComponent , 
children:[
{path:'Homepage',component:HomepageComponent},
{ path: 'favourite', component: FavouritelistComponent },
{path: 'search' , component: SearchDetailComponent},
]},
//{path: 'Main', component:MainnavBarComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

