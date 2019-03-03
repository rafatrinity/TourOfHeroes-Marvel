import {PersonagemModule} from './personagem/personagem.module'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { PersonagemService } from './services/personagem.service';
import { PersonagemComponent } from './personagem/personagem.component';
import { CardComponent } from './componentes/card/card.component';
import { MyNavComponent } from './componentes/my-nav/my-nav.component';

@NgModule({
	imports:      [ BrowserModule, FormsModule, HttpClientModule, PersonagemModule ],
	declarations: [ AppComponent, PersonagemComponent, CardComponent, MyNavComponent ],
	bootstrap:    [ AppComponent ],
	providers: [PersonagemService, PersonagemModule]
})
export class AppModule { }