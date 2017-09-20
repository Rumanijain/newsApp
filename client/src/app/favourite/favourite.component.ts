import { Component, Input, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {FavouriteService} from "./favourite.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  
  providers: [FavouriteService]
})
export class FavouriteComponent implements OnInit {
@Input('data') data:any;


  constructor( private favouriteservice:FavouriteService , private router:Router){}
 
  deleteObject(del){
       this.favouriteservice.deletefavNews(del);
       alert("News Deleted");
       this.router.navigateByUrl("/favourite");

    }
    updateNews(news,review){
   console.log(review);
   news.comments = review;
   this.favouriteservice.updateFav(news);
}
ngOnInit() {
  }
}
