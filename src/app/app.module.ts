import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FilmiComponent} from './seznami/filmi.component';
import {FilmComponent} from './seznami/film.component';
import {FilmiService} from './seznami/services/FilmiService';
import { AddFilmModalComponent } from './seznami/add-film.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FilmiComponent,
        FilmComponent,
        AddFilmModalComponent
    ],
    providers: [FilmiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

