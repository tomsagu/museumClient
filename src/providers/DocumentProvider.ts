import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpMethodsInterface } from './HttpMethodsInterface';
import { Document } from 'src/models/Document';

@Injectable()
export class DocumentProvider implements HttpMethodsInterface {


    basicUrl : string = 'http://localhost:8080/documents';


    constructor(private http: Http) {}

    private obtainHeaders() {
        const token = sessionStorage.getItem("token");

        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Content-type','application/json;charset=utf-8');
        headers.append('Accept','application/json');
        headers.append('Authorization',token);
        return headers;
    }

    all(): Observable<Document[]> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl,options).pipe(map(response => { return response.json()._embedded.documents }));
    }

    get(id: String): Observable<Document> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/' + id,options).pipe(map(response => { return response.json()}));
    }
    getByWord(word: String): Observable<Document[]> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/search/findByNameLikeIgnoreCaseOrTextLikeIgnoreCase?word=' + word + "&word1=" + word,options).pipe(map(response => { return response.json()._embedded.documents}));
    }
    put(id: String, document: Document): Observable<Document> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: false});
        return this.http.put(this.basicUrl + '/' + id , document,options).pipe(map(response => { return response.json()}));
    }
    post(document: Document): Observable<Document> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.post(this.basicUrl, document,options).pipe(map(response => { return response.json()}));
    }
    delete(id: String): Observable<Document> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.delete(this.basicUrl+ '/' + id,options).pipe(map(response => { return response.json()}));
    }

    count(): Observable<Document> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/'+ 'count',options).pipe(map(response => { return response.json()._embedded.documents }));
    }
}