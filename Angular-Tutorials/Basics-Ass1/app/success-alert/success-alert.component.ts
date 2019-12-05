import { Component } from "../../../node_modules/@angular/core";

@Component({
    selector: 'app-success-alert',
    template: '<div class="container"><p>You are successful!</p></div>',
    styles: [
        `
        p{
            background-color: blue;
            padding: 20px;
            border: solid 2px;
            color:yellow;
        }
        `

    ]

})

export class SuccessAlertComponent{
}