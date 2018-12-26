import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-section-header',
    templateUrl: './section-header.component.html',
    styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

    @Input() icon: string;
    @Input() title: string;

    constructor() {

    }

    ngOnInit() {

    }


    get classIcon(): string {
        return 'fa ' + this.icon;

    }

}
