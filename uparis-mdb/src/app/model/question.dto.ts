import {Abstract} from "./abstract.dto";

export class Question extends Abstract {
    question: string;
    type: string;
    value: string;
    hint: string;
}
