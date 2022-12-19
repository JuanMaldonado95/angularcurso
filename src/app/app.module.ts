import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeroesModule,
        ContadorModule,
        DbzModule,
    ]
})
export class AppModule { }
