import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this._isAuthenticated(state.url);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(childRoute, state);
    }

    private _isAuthenticated(url: string): boolean {
        if (this.authService.authenticated) {
            return true;
        }

        this.authService.redirectUrl = url;
        this.router.navigate(['/admin/login']);
        return false;
    }
}
