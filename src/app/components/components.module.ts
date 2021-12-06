import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CarouselMultipleComponent } from './carousel-multiple/carousel-multiple.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { NetworkLinkComponent } from './network-link/network-link.component';
import { InputCustomComponent } from './input-custom/input-custom.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { AutocompleteDirectionComponent } from './autocomplete-direction/autocomplete-direction.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NavAccordeonComponent } from './nav-accordeon/nav-accordeon.component';
import { environment } from 'src/environments/environment';
import { VideoComponent } from './video/video.component';
import { AppleButtonComponent } from './apple-button/apple-button.component';
import { AndroidButtonComponent } from './android-button/android-button.component';
import { PolygonMapComponent } from './polygon-map/polygon-map.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CarouselMultipleComponent,
    MapComponent,
    NetworkLinkComponent,
    InputCustomComponent,
    ButtonComponent,
    AutocompleteDirectionComponent,
    NavAccordeonComponent,
    VideoComponent,
    AppleButtonComponent,
    AndroidButtonComponent,
    PolygonMapComponent,
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_URL,
    }),
    IvyCarouselModule,
    RouterModule,
    FormsModule,
    GooglePlaceModule
  ],
  exports: [
    NavbarComponent,
    CarouselMultipleComponent,
    MapComponent,
    NetworkLinkComponent,
    InputCustomComponent,
    ButtonComponent,
    AutocompleteDirectionComponent,
    NavAccordeonComponent,
    VideoComponent,
    AppleButtonComponent,
    AndroidButtonComponent,
    PolygonMapComponent
  ],
})
export class ComponentsModule {}
