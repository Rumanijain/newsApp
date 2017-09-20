import { Injectable } from '@angular/core';
import { Http, Response }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
 export class LoginService {
  obs : Observable<any>;
  dat:any;
  private loginUrl = 'http://localhost:3000/getdetail/';
  private registerUrl = 'http://localhost:3000/userdetail';
  constructor(private http: Http) {}
  
  login(data:any):Observable<any> {
    return this.http.get(this.loginUrl+data)
    .map((response)=>{return response.json()[0]}); }

   add(data:any): Observable<any> {
    return  this.http.post(this.registerUrl,data)
    .map((response:Response)=>{ return response.json()});}
    }