import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {

  constructor(private http: Http) { }
  private url = 'https://newsapi.org/v1/sources?language=en';
  
  getchannel(channel:any){     //getting channel names from database
    return this.http.get(this.url)
    .map((response:Response)=>response.json());
  }


   getnews(newsdaily:any) {   //getting news details from database 
    if(newsdaily === ""){
      window.alert("please enter valid value");
    } else {
    return this.http.get('https://newsapi.org/v1/articles?source='+ newsdaily +'&apiKey=f92aea304ced4ee9b4d1d92c9bc9126f')
               .map((res:Response) =>res.json());
  }}
}
