import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";
import {GetService} from "./http-get.service";
import {map, take} from "rxjs/internal/operators";
import {Person} from "../model/Person.dto";

@Injectable()
export class PersonResolver implements Resolve<Person> {

    constructor(private service: GetService, private router: Router) {
    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> | Promise<Person> | Person {
        let idPerson: string = route.paramMap.get('idPerson') || route.queryParamMap.get('idPerson');

        return this.service.getPerson(idPerson).pipe(
            take(1),
            map(person => {
                if (person) {
                    return person;
                }
                else {
                    this.router.navigate(['/']);
                    return null;
                }
            })
        );
    }
}
