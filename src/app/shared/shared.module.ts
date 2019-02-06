import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpCardListComponent } from './twimp/twimp-card-list/twimp-card-list.component';

@NgModule({
  declarations: [TwimpCardComponent, TwimpCardListComponent],
  exports: [TwimpCardComponent, TwimpCardListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
