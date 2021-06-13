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

@NgModule({
  declarations: [
    NavbarComponent,
    CarouselMultipleComponent,
    MapComponent,
    NetworkLinkComponent,
    InputCustomComponent,
    ButtonComponent,
    AutocompleteDirectionComponent,
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnY8kMwai0w66KFgVDfGoFom4BfJ-hkM0',
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
    AutocompleteDirectionComponent
  ],
})
export class ComponentsModule {}
