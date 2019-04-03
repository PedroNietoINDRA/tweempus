import { Component, Input } from '@angular/core';
import { Twimp } from '../twimp.model';
import { Author } from '../../author/author.model';

@Component({
  selector: 'tweempus-twimp-card-list',
  templateUrl: './twimp-card-list.component.html',
  styleUrls: ['./twimp-card-list.component.css']
})
export class TwimpCardListComponent {
  @Input() twimps: Twimp[];
}
