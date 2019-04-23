import { Observable } from "rxjs";

export interface HttpMethodsInterface {
    all() : Observable<any>,
    get(id : string) : Observable<any>,
    put(id : string, body : any) : Observable<any>,
    post(body : any) : Observable<any>,
    delete(id : string) : Observable<any>,
    count(options : any) : Observable<any>
}