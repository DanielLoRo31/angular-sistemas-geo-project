import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SliderSectionComponent } from './slider-section/slider-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ScreenshotsSectionComponent } from './screenshots-section/screenshots-section.component';
import { MapSectionComponent } from './map-section/map-section.component';
import { TechnologiesSectionComponent } from './technologies-section/technologies-section.component';
import { NetworksSectionComponent } from './networks-section/networks-section.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [HomeComponent, SliderSectionComponent, AboutSectionComponent, ScreenshotsSectionComponent, MapSectionComponent, TechnologiesSectionComponent, NetworksSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }
