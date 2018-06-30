import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Product} from "../model/product.dto";
import {Observable} from "rxjs/index";
import {GetService} from "./http-get.service";
import {map, take} from "rxjs/internal/operators";

@Injectable()
export class ProductResolver implements Resolve<Product> {

    constructor(private service: GetService, private router: Router) {
    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
        let idProduct: string = route.paramMap.get('id') || route.queryParamMap.get('idProduct');

        return this.service.getProduct(idProduct).pipe(
            take(1),
            map(product => {
                if (product) {
                    return product;
                }
                else {
                    this.router.navigate(['/']);
                    return null;
                }
            })
        );
    }
}
