import { Component, Input, OnInit } from '@angular/core';
import { Twimp } from '../twimp.model';

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css']
})
export class TwimpCardComponent implements OnInit{
  @Input() twimp: Twimp;

  ngOnInit() {
    console.info("Inicializamos el twimp con id:" + this.twimp.id);
  }

  like(): void {
    this.twimp.favorite = !this.twimp.favorite;
    console.info("Favorito: " + this.twimp.favorite);
  }

  configClass() {
    let params = {
      active: this.twimp.favorite,      // true
    };
    return params;
  }
}
