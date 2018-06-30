import {NgForm} from "@angular/forms";

export class FormHelper {
    private _formLookup = new Map<string, NgForm>();
    disabled: boolean = true;

    public register(name: string, form: NgForm): void {
        if (form == null) {
            this._formLookup.delete(name);
        } else {
            this._formLookup.set(name, form);
        }
    }

    public lookup(name: string): NgForm {
        return this._formLookup.get(name);
    }

    public get isValid(): boolean {
        const forms: NgForm[] = Array.from(this._formLookup.values());
        const isInvalid = forms.some((f: NgForm) => f.invalid);
        return !isInvalid;
    }

    public submit(): void {
        this._formLookup.forEach((form) => {
            form.onSubmit(null);
        });
    }

    public reset(): void {
        this._formLookup.forEach((form) => {
            form.onReset();
        });
    }
}
