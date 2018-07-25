import {Abstract} from "./abstract.dto";

export class Person extends Abstract {

    gender: string;

    fullName: string;

    firstName: string;

    lastName: string;

    birthday: any | string | Date;

    wechat: string;

    telephone: string;

    email: string;

    address: string;

    addressComplement: string;

    zipCode: string;

    city: string;

    country: string;

    portraitUrl: string;

    selfDescription: string;

    listGrantedAuthority: string[];
}
