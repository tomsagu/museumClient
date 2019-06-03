import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpMethodsInterface } from './HttpMethodsInterface';
import { User } from 'src/models/User';


@Injectable()
export class UserProvider implements HttpMethodsInterface {


    basicUrl : string = 'http://localhost:8080/users';


    constructor(private http: Http) {}

    private obtainHeaders() {
        const token = sessionStorage.getItem("token");

        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', '*');
        headers.append('Content-type','application/json;charset=utf-8');
        headers.append('Accept','application/json');
        headers.append('Authorization',token);
        return headers;
    }

    all(): Observable<User[]> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl,options).pipe(map(response => { return response.json() }));
    }

    get(id: string): Observable<User> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/'  + id,options).pipe(map(response => { return response.json() }));
    }

    findByUsernameAndPassword(username: string, password:string): Observable<User>{
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/search/findByUsernameAndPassword?username=' + username + "&password=" + password,options).pipe(map(response => { return response.json() }));
    }

    put(id: string, user: User): Observable<User> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.put(this.basicUrl + '/'  + id, user,options).pipe(map(response => { return response.json() }));
    }
    post(user: User): Observable<User> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.post(this.basicUrl, user,options).pipe(map(response => { return response.json() }));
    }
    delete(id: string): Observable<User> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.delete(this.basicUrl  + '/' + id,options).pipe(map(response => { return response.json() }));
    }

    count(): Observable<User> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/'  + 'count',options).pipe(map(response => { return response.json() }));
    }
}