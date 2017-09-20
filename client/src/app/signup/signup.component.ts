import { Component, OnInit } from '@angular/core';
import {RegisterService} from './signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[RegisterService]
})
export class SignupComponent implements OnInit {

  constructor(private registerservice:RegisterService , private router:Router) {  }
data={};
ref:any;
 addInfo(obj:any){				//Adding the information of user
 	this.registerservice.register(obj)
 	.subscribe(ref=>{
 		this.ref = ref
 		console.log(ref);
  	this.login(ref);
  });
 	
  }


login(flag:any){			//Validating the Register
	console.log(flag);
	if (flag) {
		console.log("you are in if part");
		alert("sucessfully registered");
		this.router.navigateByUrl("/Login");
	}
	else{
		console.log("you are in else part");
		alert("enter different email-id");
	}
	console.log("after"+flag);
}

  ngOnInit() {
  }

}

