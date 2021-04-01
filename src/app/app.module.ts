import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';


// PrimeNg Module
import { PrimeNgModule } from './prime-ng/prime-ng.module';

//ModuloShared
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


// tema cambio de hora
import localEsPY from '@angular/common/locales/es-PY';
import localFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsPY);
registerLocaleData(localFR);






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    PrimeNgModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-PY'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
