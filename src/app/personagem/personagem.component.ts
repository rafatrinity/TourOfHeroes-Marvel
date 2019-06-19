import {PersonagemModule} from './personagem.module'
import { Component, OnInit, Pipe, PipeTransform, TemplateRef } from '@angular/core';
import { PersonagemService } from '../services/personagem.service';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { Personagem } from './personagem'

@Component({
  selector: 'personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css'],
  providers: [PersonagemService,PersonagemModule]
})
export class PersonagemComponent implements OnInit {
  imgUrl = "https://cdn.iconscout.com/icon/free/png-128/ironman-marvel-super-hero-earth-saver-avenger-28699.png"
  public personagem : Array<Personagem>;
  timeA = {};
  timeB = {};
  timeV = {};
  aok = false;
  bok = false;
  vencedor = false;
  somaA = 0;
  somaB = 0;
  constructor(private PersonagemService: PersonagemService) { }

  ngOnInit() {
    this.getPersonagens();
  }
  getPersonagens(): void {
    this.PersonagemService.getPersonagens()
    .subscribe(ok => {
      this.personagem = ok;
      console.log(this.personagem);
    },
    error => {
      console.error('deu merda ' + error);
    }
    );
  }
}