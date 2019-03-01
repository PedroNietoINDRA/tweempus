import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpCardListComponent } from './twimp/twimp-card-list/twimp-card-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';

@NgModule({
  declarations: [TwimpCardComponent, TwimpCardListComponent, AuthorCardComponent],
  exports: [TwimpCardComponent, TwimpCardListComponent, AuthorCardComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
