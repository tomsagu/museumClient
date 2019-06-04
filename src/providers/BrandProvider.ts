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
        const token = sessionStorage.getItem("token");
        let headers = new Headers();    
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
        headers.append('Accept','application/json');
        headers.append('content-type','application/json;charset=utf-8');
        headers.append('Authorization','Bearer ' + token);
        
        return headers;
    }

    all(): Observable<Brand[]> {
        
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl,options).pipe(map(response => { return response.json()._embedded.brands }));
    }

    get(id: String): Observable<Brand> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/' + id,options).pipe(map(response => { return response.json() }));
    }
    
    getByWord(word: String): Observable<Brand[]> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/search/findByNameLikeOrTextLike?word=' + word + "&word1=" + word,options).pipe(map(response => { return response.json()._embedded.brands}));
    }

    put(id: String, brand: Brand): Observable<Brand> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.put(this.basicUrl + '/'  + id, brand,options).pipe(map(response => { return response.json() }));
    }
    post(brand: Brand): Observable<Brand> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.post(this.basicUrl, brand,options).pipe(map(response => { return response.json() }));
    }
    delete(id: String): Observable<Brand> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.delete(this.basicUrl + '/'  + id,options).pipe(map(response => { return response.json() }));
    }

    count(): Observable<Brand> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + 'count',options).pipe(map(response => { return response.json() }));
    }

}