import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../model/person.dto";
import {Itinerary} from "../model/itinerary.dto";
import {Schedule} from "../model/schedule.dto";
import {Multimedia} from "../model/multimedia.dto";
import {Product} from "../model/product.dto";
import {Trip} from "../model/trip.dto";
import {Option} from "../model/option.dto";
import {Stock} from "../model/stock.dto";
import {Tag} from "../model/tag.dto";

export class FormHelper {
    public static markAsTouched(ctl: AbstractControl) {
        if (ctl instanceof FormControl) {
            ctl.markAsTouched();
        }
        if (ctl instanceof FormGroup || ctl instanceof FormArray) {
            (<any>Object).values(ctl.controls).forEach(control => FormHelper.markAsTouched(control));
        }
    }

    public static isValid(ctl: AbstractControl) {
        FormHelper.markAsTouched(ctl);
        return ctl.valid;
    }

    public static newProductForm(formBuilder: FormBuilder, product?: Product): FormGroup {
        return formBuilder.group({
            id: formBuilder.control(product ? product.id : null),
            name: formBuilder.control(product ? product.name : null, Validators.required),
            alias: formBuilder.control(product ? product.alias : null),
            status: formBuilder.control(product ? product.status : 'INACTIVE', Validators.required),
            shortDescription: formBuilder.control(product ? product.shortDescription : null, Validators.maxLength(128)),
            longDescription: formBuilder.control(product ? product.longDescription : null, Validators.maxLength(512)),
            duration: formBuilder.control(product ? product.duration : null, [Validators.required, Validators.min(1)]),
        })
    }

    public static newScheduleForm(formBuilder: FormBuilder, schedule?: Schedule): FormGroup {
        return formBuilder.group({
            id: formBuilder.control(schedule ? schedule.id : null),
            time: formBuilder.control(schedule ? schedule.time : null),
            numOrder: formBuilder.control(schedule ? schedule.numOrder : null, Validators.required),
            activity: formBuilder.control(schedule ? schedule.activity : null, Validators.required),
        });
    }

    public static newItineraryForm(formBuilder: FormBuilder, itinerary?: Itinerary): FormGroup {
        let itineraryForm = formBuilder.group({
            id: formBuilder.control(itinerary ? itinerary.id : null),
            dayStart: formBuilder.control(itinerary ? itinerary.dayStart : null, Validators.required),
            duration: formBuilder.control(itinerary ? itinerary.duration : 1, [Validators.required, Validators.min(1)]),
            movement: formBuilder.control(itinerary ? itinerary.movement : null),
        });

        return itineraryForm;
    }

    public static newMultimediaForm(formBuilder: FormBuilder, media?: Multimedia): FormGroup {
        return formBuilder.group({
            id: formBuilder.control(media ? media.id : null),
            srcUrl: formBuilder.control(media ? media.srcUrl : null, Validators.required),
            type: formBuilder.control(media ? media.type : null, Validators.required),
            altText: formBuilder.control(media ? media.altText : null),
            title: formBuilder.control(media ? media.title : null),
            description: formBuilder.control(media ? media.description : null),
        });
    }

    public static newTripForm(formBuilder: FormBuilder, trip?: Trip): FormGroup {
        return formBuilder.group({
            id: formBuilder.control(trip ? trip.id : null),
            idProduct: formBuilder.control(trip ? trip.idProduct : null, Validators.required),
            nameProduct: formBuilder.control(trip ? trip.nameProduct : null),
            durationProduct: formBuilder.control(trip ? trip.durationProduct : null),
            dateStart: formBuilder.control(trip ? trip.dateStart : null, Validators.required),
            dateEnd: formBuilder.control(trip ? trip.dateEnd : null),
            stock: formBuilder.control(trip ? trip.stock : null, [Validators.required, Validators.min(0)]),
            price: formBuilder.control(trip ? trip.price : null, [Validators.required, Validators.min(0)]),
            priceVAT: formBuilder.control(trip ? trip.priceVAT : null),
            currency: formBuilder.control(trip ? trip.currency : null, Validators.required),
            urlCodeQR: formBuilder.control(trip ? trip.urlCodeQR : null),
        });
    }

    public static newOptionForm(formBuilder: FormBuilder, option?: Option): FormGroup {
        return formBuilder.group({
            id: formBuilder.control(option ? option.id : null),
            name: formBuilder.control(option ? option.name : null, Validators.required),
            description: formBuilder.control(option ? option.description : null),
            level: formBuilder.control(option ? option.level : null, [Validators.required, Validators.min(1)]),
            numOrder: formBuilder.control(option ? option.numOrder : null, [Validators.required, Validators.min(0)]),
            price: formBuilder.control(option ? option.price : null, [Validators.required]),
            priceVAT: formBuilder.control(option ? option.priceVAT : null),
            stock: formBuilder.group({}),
        });
    }

    public static newStockForm(formBuilder: FormBuilder, stock?: Stock): FormGroup {
        return formBuilder.group({
            id: formBuilder.control(stock ? stock.id : null),
            name: formBuilder.control(stock ? stock.name : null, Validators.required),
            quantity: formBuilder.control(stock ? stock.quantity : null, [Validators.required, Validators.min(0)]),
        });
    }

    public static newPersonForm(formBuilder: FormBuilder, person?: Person): FormGroup {
        return formBuilder.group({
                'gender': [person ? person.gender : null, Validators.required],
                'firstName': [person ? person.firstName : null, Validators.required],
                'lastName': [person ? person.lastName : null, Validators.required],
                'birthday': [person ? person.birthday : null, Validators.required],
                'birthplace': [person ? person.birthplace : null, Validators.required],
                'wechat': [person ? person.wechat : null, Validators.required],
                'telephone': [person ? person.telephone : null, Validators.required],
                'email': [person ? person.email : null, [Validators.required, Validators.email]],
                'address': [person ? person.address : null, Validators.required],
                'addressComplement': [person ? person.addressComplement : null,],
                'zipCode': [person ? person.zipCode : null, Validators.required],
                'city': [person ? person.city : null, Validators.required],
                'country': [person ? person.country : null, Validators.required],
            }
        )
    }

    public static newTagForm(formBuilder: FormBuilder, tag?: Tag): FormGroup {
        return formBuilder.group({
            id: formBuilder.control(tag ? tag.id : null),
            value: formBuilder.control(tag ? tag.value : null, Validators.required)
        });
    }
}
