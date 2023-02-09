import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {


  url= "https://fakestoreapi.com/products";


  constructor( private http:HttpClient)  { }

getallProduct():Observable<any>{
  return this.http.get<any>(this.url).pipe(map(res=>{
return res
  }))
}


}
