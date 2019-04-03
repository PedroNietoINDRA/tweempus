import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthorService } from './author/author.service';
import { TwimpService } from './twimp/twimp.service';

import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpCardListComponent } from './twimp/twimp-card-list/twimp-card-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TwimpCardComponent, TwimpCardListComponent, AuthorCardComponent],
  providers: [AuthorService, TwimpService],
  exports: [TwimpCardComponent, TwimpCardListComponent, AuthorCardComponent, RouterModule]
})
export class SharedModule { }
