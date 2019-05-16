import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports:      [ 
        BrowserModule,
        HttpModule,
        FormsModule,
        ModalModule.forRoot()
    ],
    declarations: [ 
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
