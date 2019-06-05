import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpMethodsInterface } from './HttpMethodsInterface';
import { Type } from 'src/models/Type';

@Injectable()
export class TypeProvider implements HttpMethodsInterface {


    basicUrl : string = "http://localhost:8080/types";


    constructor(private http: Http) {}

    private obtainHeaders() {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept','application/json');
        headers.append('content-type','application/json;charset=utf-8');

        return headers;
    }

    all(): Observable<Type[]> {
        
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl).pipe(map(response => { return response.json()._embedded.types }));
    }

    get(id: String): Observable<Type> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/' + id).pipe(map(response => { return response.json() }));
    }

    getByWord(word: String): Observable<Type[]> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/search/findByNameLikeIgnoreCase?word=' + word).pipe(map(response => { return response.json()._embedded.types}));
    }

    put(id: String, Type: Type): Observable<Type> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.put(this.basicUrl + '/'  + id, Type).pipe(map(response => { return response.json() }));
    }
    post(Type: Type): Observable<Type> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.post(this.basicUrl, Type).pipe(map(response => { return response.json() }));
    }
    delete(id: String): Observable<Type> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.delete(this.basicUrl + '/'  + id).pipe(map(response => { return response.json() }));
    }

    count(): Observable<Type> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + 'count').pipe(map(response => { return response.json() }));
    }

}