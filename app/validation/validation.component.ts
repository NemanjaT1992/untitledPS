import { Component } from '@angular/core';
import { Panel, InputText, Button } from 'primeng/primeng';

@Component({
    selector: "validationForm",
    templateUrl: "app/validation/validation.component.html",
    styleUrls: ["app/validation/validation.component.css"],
    directives: [ Panel, InputText, Button ]
})
export class ValidationComponent
{
    username: string;
    password: string;

    constructor() { }

    checkLogin(event)
    {
        console.log(this.username + " " + this.password);
    }
}   