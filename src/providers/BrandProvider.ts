import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpMethodsInterface } from './HttpMethodsInterface';
import { Brand } from 'src/models/Brand';

@Injectable()
export class BrandProvider implements HttpMethodsInterface {


    basicUrl : string = "http://localhost:8080/brands";


    constructor(private http: Http) {}

    private obtainHeaders() {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept','application/json');
        headers.append('content-type','application/json;charset=utf-8');

        return headers;
    }

    all(): Observable<Brand[]> {
        
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl).pipe(map(response => { return response.json()._embedded.brands }));
    }

    get(id: String): Observable<Brand> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/' + id).pipe(map(response => { return response.json() }));
    }
    
    getByWord(word: String): Observable<Brand[]> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/search/findByNameLikeOrTextLike?word=' + word + "&word1=" + word).pipe(map(response => { return response.json()._embedded.brands}));
    }

    put(id: String, brand: Brand): Observable<Brand> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.put(this.basicUrl + '/'  + id, brand).pipe(map(response => { return response.json() }));
    }
    post(brand: Brand): Observable<Brand> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.post(this.basicUrl, brand).pipe(map(response => { return response.json() }));
    }
    delete(id: String): Observable<Brand> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.delete(this.basicUrl + '/'  + id).pipe(map(response => { return response.json() }));
    }

    count(): Observable<Brand> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + 'count').pipe(map(response => { return response.json() }));
    }

}