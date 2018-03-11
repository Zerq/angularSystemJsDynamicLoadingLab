import { Component } from "@angular/core";

@Component({
    selector:"my-app",
    template:'<div style="color:yellow; background-color:black;">{{Sog}}</div>'
})
export class AppComponent {

    public Sog: string = "432342343";
}