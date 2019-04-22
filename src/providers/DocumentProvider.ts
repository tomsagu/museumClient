import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpMethodsInterface } from './HttpMethodsInterface';
import { Document } from 'src/models/Document';
//import { AppSettings } from 'src/config/AppSettings';

@Injectable()
export class DocumentProvider implements HttpMethodsInterface {


    basicUrl : string = 'http://localhost:8080/documents';


    constructor(private http: Http) {}

    private obtainHeaders() {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept','application/json');
        headers.append('content-type','application/json;charset=utf-8');

        return headers;
    }

    all(): Observable<Document[]> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl).pipe(map(response => { return response.json()._embedded.documents }));
    }

    get(id: String): Observable<Document> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/' + id).pipe(map(response => { return response.json()._embedded.documents }));
    }
    put(id: String, document: Document): Observable<Document> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: false});
        return this.http.put(this.basicUrl + '/' + id , document).pipe(map(response => { return response.json()._embedded.documents }));
    }
    post(document: Document): Observable<Document> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.post(this.basicUrl, document).pipe(map(response => { return response.json()._embedded.documents }));
    }
    delete(id: String): Observable<Document> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.delete(this.basicUrl+ '/' + id).pipe(map(response => { return response.json()._embedded.documents }));
    }

    count(): Observable<Document> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/'+ 'count').pipe(map(response => { return response.json()._embedded.documents }));
    }
}