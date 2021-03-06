﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
    constructor() { }
}
