import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material";

@Injectable()
export class SnackBar {
    constructor(private snackBar: MatSnackBar) {

    }

    public openSuccessfulSave(): void {
        this.snackBar.open("保存成功", null, {
            duration: 1000
        })
    }

    public openSuccessfulDelete(): void {
        this.snackBar.open("删除成功", null, {
            duration: 1000
        })
    }
}
