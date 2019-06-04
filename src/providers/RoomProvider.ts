import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpMethodsInterface } from './HttpMethodsInterface';
import { Room } from 'src/models/Room';

@Injectable()
export class RoomProvider implements HttpMethodsInterface {


    basicUrl : string = "http://localhost:8080/rooms";


    constructor(private http: Http) {}

    private obtainHeaders() {
        const token = sessionStorage.getItem("token");
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
        headers.append('Content-type','application/json;charset=utf-8');
        headers.append('Accept','application/json');
        headers.append('Authorization',token);

        return headers;
    }

    all(): Observable<Room[]> {
        
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl,options).pipe(map(response => { return response.json()._embedded.rooms }));
    }

    get(id: String): Observable<Room> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/' + id,options).pipe(map(response => { return response.json() }));
    }

    getByWord(word: String): Observable<Room[]> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/search/findByNameLikeOrTextLike?word=' + word + "&word1=" + word,options).pipe(map(response => { return response.json()._embedded.rooms}));
    }

    put(id: String, room: Room): Observable<Room> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.put(this.basicUrl + '/'  + id, room,options).pipe(map(response => { return response.json() }));
    }
    post(room: Room): Observable<Room> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.post(this.basicUrl, room,options).pipe(map(response => { return response.json() }));
    }
    delete(id: String): Observable<Room> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.delete(this.basicUrl + '/'  + id,options).pipe(map(response => { return response.json() }));
    }

    count(): Observable<Room> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + 'count',options).pipe(map(response => { return response.json() }));
    }

}