import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemService } from '../services/personagem.service';

@NgModule({
  imports: [
    CommonModule,
    PersonagemService,
  ],
  declarations: [PersonagemService]
})
export class PersonagemModule { }