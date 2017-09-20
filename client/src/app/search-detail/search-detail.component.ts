import { Component,Input, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchDetailService} from './search-detail.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers:[SearchDetailService]
})
export class SearchDetailComponent implements OnInit {
@Input('new') new:any;
ref:any;
  constructor(private searchdetailservice: SearchDetailService) { }
  
 addcontent(obj:any){		//Sending Data in Database through Service
  	this.searchdetailservice.addfavNews(obj);
 }

 // addcontent(obj:any){		//Sending Data in Database through Service
 // 	this.searchdetailservice.addfavNews(obj)
 // 	.subscribe(res=>{this.ref=ref console.log(ref);)
 // }
  ngOnInit() {
  }

}


