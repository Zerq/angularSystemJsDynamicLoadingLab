import { Component } from "@angular/core";



@Component({
    selector:"my-app",
    template:'<div style="color:yellow; background-color:black;">{{Sog}}</div>'
})
export class AppComponent {

    public Sog: string = "432342343";
    public constructor() {
        this.test().then(n => { });
    }

    public async test(): Promise<void> {
        let x = "../api/TSTest/Burklax.js";
        const Burklax: any = await import(x);
        Burklax.say();

    }
}