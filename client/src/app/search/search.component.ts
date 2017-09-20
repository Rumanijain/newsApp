import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import {SearchService} from './search.service';
import { Headers, Http,Response } from '@angular/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent implements OnInit {
  @Output() onClick=new EventEmitter<any>();

  constructor(private searchservice: SearchService) {}
  channel="";
  data="";
  temp:any="";
  ref="";
  newsdaily="";
  channellist(a:string){     //function call to database
      this.searchservice.getchannel(a)
      .subscribe(data=>{this.data=data;
      })
   }
   newSearch():void{    //function call to database
    this.searchservice.getnews(this.newsdaily)
    .subscribe(ref=>{
      console.log(ref);
      this.ref=ref;
    this.onClick.emit(this.ref);
    console.log(ref);

 });
   
}

    

  ngOnInit() {
    //this.channellist(this.temp);
  }
 
 setChannel(event:Event){
   this.newsdaily = (<HTMLLIElement>event.target).id;
   this.newSearch();
   console.log((<HTMLLIElement>event.target).id);
    this.temp=(<HTMLLIElement>event.target).id;
    console.log(this.temp);
  this.channellist(this.temp);
  //this.onSelect.emit(this.temp);
  //console.log(this.temp);
 }


}
