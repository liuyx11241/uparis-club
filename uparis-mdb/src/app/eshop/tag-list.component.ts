import {Component, Input, OnInit} from '@angular/core';
import {Tag} from "../model/tag.dto";
import {ColorHelper} from "../model/color-helper.util";

@Component({
    selector: 'uparis-tag-list',
    templateUrl: './tag-list.component.html',
    styles: []
})
export class TagListComponent implements OnInit {
    private _randomBadgeColor: any[];

    private _listTag: Tag[];

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set listTag(value: Tag[]) {
        this._listTag = value;
        this._randomBadgeColor = [];
        this._listTag.forEach(
            () => this._randomBadgeColor.push([ColorHelper.randomBadgeColor(), ColorHelper.randomBadgeTone()])
        );
    }
}
