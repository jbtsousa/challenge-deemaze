import { WeatherCardComponent } from './homepage/components/weather-card/weather-card';
import { FooterComponent } from './homepage/components/footer/footer.component';
import { BodyComponent } from './homepage/components/body/body.component';
import { HeaderComponent } from './homepage/components/header/header.component';
import { HomePageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    BodyComponent,
    WeatherCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
