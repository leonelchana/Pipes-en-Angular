import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent  } from './app.component';
/////////FieldSet
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
////modulo personalisado
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el local de la app
import localeEs from '@angular/common/locales/es-BO';
import {registerLocaleData} from'@angular/common';


registerLocaleData(localeEs);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    /*  AppRoutingModule,  */
     AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [{
    provide:LOCALE_ID,useValue:'es-BO'
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
