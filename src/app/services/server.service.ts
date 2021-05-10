import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient,public router:Router) { }

sendServer(postData:any[],url) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
        
 
      return this.http.post("http://localhost:8080/api/"+url, postData,httpOptions)
     
      

    } 

}
