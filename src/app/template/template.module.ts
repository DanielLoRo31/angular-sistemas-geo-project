import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    ComponentsModule
  ]
})
export class TemplateModule { }
