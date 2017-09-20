import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()      //code to post data into database for register
export class RegisterService{
  private url: string="http://localhost:3000/"
  constructor(private http:Http){}
register(reg:any){
    return this.http
    .post(this.url+"userdetail",reg)
    .map((res:Response)=>{
    	if(res.status===200){
    		return res.json();
    	}
    });
  }

 
}
