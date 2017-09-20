import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class HomeService {
  private url: string="http://localhost:3000/"
  constructor(private http:Http){}
  
  getConnection(){
  return this.http.get(this.url);
  }

  addfavNews(fav:any){
  return this.http
  .post(this.url+"user",fav)
  .subscribe(data=>{console.log("Data from post",data);});
  }

  
}
