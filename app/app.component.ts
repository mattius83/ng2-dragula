import { Component }                           from "@angular/core";

import {  DragulaService }                     from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {


    constructor(private dragulaService: DragulaService) {
        dragulaService.setOptions('first-bag', {
            removeOnSpill: true
        });

    }


}

