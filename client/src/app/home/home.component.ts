import { Component , OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {Http,Response} from '@angular/http';
import {NgModule} from '@angular/core';
import {HomeService} from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private homeservice:HomeService) { }
title = 'app';
  ref:any={};
  onClickClicked(ref:any){
    this.ref=ref;
    console.log("app component",this.ref);
  }
  testconnection(){
  this.homeservice.getConnection();
  console.log("connected succesfully");
}
  ngOnInit():void
{
this.testconnection();
}
}
