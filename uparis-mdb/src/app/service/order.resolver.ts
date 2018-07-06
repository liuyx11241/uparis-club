import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Order} from "../model/order.dto";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {GetService} from "./http-get.service";
import {map, take} from "rxjs/internal/operators";

@Injectable()
export class OrderResolver implements Resolve<Order[]> {

    constructor(private router: Router,
                private service: GetService,) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> | Promise<Order[]> | Order[] {

        let orderRef = route.queryParamMap.get('reference') || route.paramMap.get('reference');

        return this.service.getOrder(orderRef).pipe(
            take(1),
            map(listOrder => {
                if (listOrder) {
                    return listOrder;
                } else {
                    this.router.navigate(['/']);
                    return null;
                }
            })
        );
    }
}
