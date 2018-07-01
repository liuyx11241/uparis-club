import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";
import {GetService} from "./http-get.service";
import {map, take} from "rxjs/internal/operators";
import {Trip} from "../model/trip.dto";

@Injectable()
export class TripResolver implements Resolve<Trip> {

    constructor(private service: GetService, private router: Router) {
    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Trip> | Promise<Trip> | Trip {
        let idTrip: string = route.paramMap.get('idTrip') || route.queryParamMap.get('idTrip');

        console.log(idTrip);
        return this.service.getTrip(idTrip).pipe(
            take(1),
            map(trip => {
                if (trip) {
                    return trip;
                }
                else {
                    this.router.navigate(['/']);
                    return null;
                }
            })
        );
    }
}
