// app.module.ts 
import {NgModule}                              from "@angular/core";
import {BrowserModule}                         from "@angular/platform-browser";
import { DragulaModule, DragulaService }       from 'ng2-dragula/ng2-dragula';

// application
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        DragulaModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        DragulaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
