import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class FavouriteListService{
  private url: string="http://localhost:3000/";
  
  constructor(private http:Http){ }

  getfavNews(){
  	return this.http.get(this.url)
  	.map(res=>res.json());
  }

}