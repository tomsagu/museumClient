import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpMethodsInterface } from './HttpMethodsInterface';
import { Piece } from 'src/models/Piece';

@Injectable()
export class PieceProvider implements HttpMethodsInterface {


    basicUrl: string = "http://localhost:8080/pieces";


    constructor(private http: Http) { }

    private obtainHeaders() {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json;charset=utf-8');

        return headers;
    }

    all(): Observable<Piece[]> {

        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.get(this.basicUrl).pipe(map(response => { return response.json()._embedded.pieces }));
    }

    get(id: String): Observable<Piece> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.get(this.basicUrl + '/' + id).pipe(map(response => { return response.json() }));
    }

    getByTypes(types: String[]): Observable<Piece[]> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.get(this.basicUrl + '/search/findByTypesContains?types=' + types).pipe(map(response => { return response.json()._embedded.pieces }));
    }

    getByRoomName(roomName: String): Observable<Piece[]> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.get(this.basicUrl + '/search/findByRoom?room=' + roomName).pipe(map(response => { return response.json()._embedded.pieces }));
    }

    getByYear(minyear: String, maxyear: String): Observable<Piece[]> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.get(this.basicUrl + '/search/findByYearBetween?minyear=' + minyear + '&maxyear=' + maxyear).pipe(map(response => { return response.json()._embedded.pieces }));

    }

    getByYearAndTypesAndBrandName(minyear: String, maxyear: String, types: String[], brand: String): Observable<Piece[]> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.get(this.basicUrl + '/search/findByYearBetweenAndTypesContainsAndBrandLike?minyear=' + minyear + '&maxyear=' + maxyear + '&types=' + types + '&brandname=' + brand).pipe(map(response => { return response.json()._embedded.pieces }));

    }

    getByYearAndTypes(minyear: String, maxyear: String, types: String[]): Observable<Piece[]> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.get(this.basicUrl + '/search/findByYearBetweenAndTypesContains?minyear=' + minyear + '&maxyear=' + maxyear + '&types=' + types).pipe(map(response => { return response.json()._embedded.pieces }));

    }

    getByYearAndBrandName(minyear: String, maxyear: String, brand: String): Observable<Piece[]> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.get(this.basicUrl + '/search/findByYearBetweenAndBrandLike?minyear=' + minyear + '&maxyear=' + maxyear + '&brandname=' + brand).pipe(map(response => { return response.json()._embedded.pieces }));

    }

    getByBrandName(brand: String): Observable<Piece[]> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.get(this.basicUrl + '/search/findByBrand?brandname=' + brand).pipe(map(response => { return response.json()._embedded.pieces }));

    }

    getByWord(word: String): Observable<Piece[]> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: true});
        return this.http.get(this.basicUrl + '/search/findByNameLikeIgnoreCaseOrTextLikeIgnoreCase?word=' + word + "&word1=" + word).pipe(map(response => { return response.json()._embedded.pieces}));
    }
  
    put(id: String, piece: Piece): Observable<Piece> {
        let options = new RequestOptions({ headers:this.obtainHeaders(),withCredentials: false});
        return this.http.put(this.basicUrl + '/'  + id, piece).pipe(map(response => { return response.json() }));
    }
  
    post(piece: Piece): Observable<Piece> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.post(this.basicUrl, piece).pipe(map(response => { return response.json() }));
    }
  
    delete(id: string): Observable<Piece> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.delete(this.basicUrl + '/' + id).pipe(map(response => { return response.json() }));
    }

    count(): Observable<Piece> {
        let options = new RequestOptions({ headers: this.obtainHeaders(), withCredentials: true });
        return this.http.get(this.basicUrl + 'count').pipe(map(response => { return response.json() }));
    }

}