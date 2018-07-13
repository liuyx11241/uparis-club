import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Trip} from "../model/trip.dto";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Order} from "../model/order.dto";
import {PostService} from "../service/http-post.service";
import {DateFormatter} from "../util/date-formatter.util";
import {FormHelper} from "../util/form-helper.util";
import {Answer} from "../model/answer.dto";

@Component({
    selector: 'uparis-checkout',
    templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
    private _trip: Trip;
    private _number: number;

    _listOrderForm: FormArray;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private postService: PostService) {
        this._listOrderForm = this.formBuilder.array([]);
    }

    ngOnInit() {
        this.route.data.subscribe((data: { trip: Trip }) => {
            this._trip = data.trip;
        });
        this.route.queryParamMap.subscribe((params: ParamMap) => {
            let number = 1;
            if (params.has('number')) {
                number = parseInt(params.get('number'));
            }
            this.number = number;
        });
    }

    set number(value: number) {
        this._number = value;

        if (this._listOrderForm.length < this._number) {
            for (var i = this._listOrderForm.length; i < this._number; i++) {
                this._listOrderForm.push(this.buildCheckoutForm());
            }
        } else {
            for (var i = this._listOrderForm.length; i > this._number; i--) {
                this._listOrderForm.removeAt(i - 1);
            }
        }
    }

    private buildCheckoutForm(): FormGroup {
        let fg = this.formBuilder.group({
            option: this.formBuilder.group([]),
            participant: FormHelper.newPersonForm(this.formBuilder),
        });

        let levels = new Set<number>();
        this._trip.listOption.forEach(value => levels.add(value.level));

        levels.forEach(level => {
            (fg.get('option') as FormGroup).addControl("option" + level, this.formBuilder.control('', Validators.required));
        });

        if (this._trip.listQuestion.length > 0) {
            let questionForm = this.formBuilder.group({});
            this._trip.listQuestion.forEach(q => {
                questionForm.addControl(q.id.toString(), this.formBuilder.control(null, Validators.required));
            });
            fg.addControl('listQuestion', questionForm);
        }

        return fg;
    }

    validate() {
        FormHelper.markAsTouched(this._listOrderForm);
        if (this._listOrderForm.valid) {
            let listOrder = [];

            for (let checkoutForm of this._listOrderForm.controls) {
                let newOrder = new Order();
                newOrder.trip = this._trip;
                newOrder.amount = this._trip.price;

                const participant = checkoutForm.get('participant').value;
                participant.birthday = DateFormatter.format(participant.birthday);
                newOrder.participant = participant;

                const listOption = checkoutForm.get('option').value;
                newOrder.listOption = [];
                Object.keys(listOption).map(opt => {
                    newOrder.listOption.push(listOption[opt])
                    newOrder.amount = newOrder.amount + listOption[opt].price;
                });

                newOrder.listAnswer = [];
                const questionForm = checkoutForm.get('listQuestion');
                this._trip.listQuestion.forEach(q => {
                    let answer = new Answer();
                    answer.question = q.question;
                    if (q.type === 'date') {
                        answer.answer = DateFormatter.format(questionForm.get(q.id.toString()).value);
                    } else {
                        answer.answer = questionForm.get(q.id.toString()).value;
                    }

                    newOrder.listAnswer.push(answer);
                });

                console.info(newOrder.listOption);
                console.info(newOrder.listAnswer);

                listOrder.push(newOrder);
            }

            this.postService.createOrders(listOrder).subscribe((order: Order) => {
                console.info(order);
                this.router.navigate(['/eshop/order'], {
                    queryParams: {
                        reference: order.reference
                    }
                });
            });
        }
    }
}
