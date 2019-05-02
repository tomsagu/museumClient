import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { UserProvider } from 'src/providers/UserProvider';
import { User } from 'src/models/User';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private router: Router,
        private userProvider: UserProvider,
    ) {

    }
    rol: string;

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
        let observer : Observable<boolean> = new Observable(suscriber => {
            this.userProvider.get(sessionStorage.getItem("userId")).subscribe(user => {            
                suscriber.next("admin".localeCompare(user.rol)==0);
            });
        });

        return observer;
    }

 


}