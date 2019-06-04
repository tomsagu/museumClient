import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 


@Injectable()
export class JWTProvider {


    basicUrl : string = 'http://localhost:8080/login';


    constructor(private http: HttpClient) {}

    private obtainHeaders() {
        var headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
        headers.append('Content-type','application/json;charset=utf-8');
        headers.append('Accept','application/json');
        return headers;
    }

    login():Observable<any>{
        let body = {
            "username":"adminserver",
              "password" : "admin"};
        
        return this.http.post(this.basicUrl,body,{headers:this.obtainHeaders(),observe: 'response'});
    }
}