import { Observable } from "rxjs";

export interface HttpMethodsInterface {
    all() : Observable<any>,
    get(id : String) : Observable<any>,
    put(id : String, body : any) : Observable<any>,
    post(body : any) : Observable<any>,
    delete(id : String) : Observable<any>,
    count(options : any) : Observable<any>
}