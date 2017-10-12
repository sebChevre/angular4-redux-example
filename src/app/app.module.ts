import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CounterReduxComponent} from "./component/from-scratch-redux/counter-redux/counter-redux-component";
import {MessagesAppState} from "./component/from-scratch-redux/model/messages-app-state";
import {MessagesReduxComponent} from "./component/from-scratch-redux/messages-redux/messages-redux-component";
import {CounterStandardReduxComponent} from "./component/standard-redux/counter-redux/messages-standard-redux-component";

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        CounterReduxComponent,
        MessagesReduxComponent,
        CounterStandardReduxComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
