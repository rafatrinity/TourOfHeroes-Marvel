import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personagem, heroi } from '../../personagem/personagem'
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imagem : string;
  @Input() name : string;
  @Output() MostrarMaisDetalhes = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
   
  }

}