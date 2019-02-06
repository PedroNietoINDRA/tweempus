import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';

@NgModule({
  declarations: [TwimpCardComponent],
  exports: [TwimpCardComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
