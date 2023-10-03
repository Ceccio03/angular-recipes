import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperButtonComponent } from './super-button.component';



@NgModule({
  declarations: [
    SuperButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuperButtonModule
  ]
})
export class SuperButtonModule { }
