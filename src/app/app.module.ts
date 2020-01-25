import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      HeaderComponent,
      routingComponents,
      HomePageComponent,
      ProductPageComponent,
      MapPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule
   ],
   providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
