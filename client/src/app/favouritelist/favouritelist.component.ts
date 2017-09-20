import { Component, OnInit } from '@angular/core';
import {FavouriteListService} from './favouritelist-service';
@Component({
  selector: 'app-favouritelist',
  templateUrl: './favouritelist.component.html',
  styleUrls: ['./favouritelist.component.css'],
  
  providers:[FavouriteListService]
})
export class FavouritelistComponent implements OnInit {

  constructor(private favouritelist : FavouriteListService ) { }
data:any;
  ngOnInit() {
    this.showfav();
  }


  showfav(){
  this.favouritelist.getfavNews()
  .subscribe(data=>{this.data=data;
      })
}

}
