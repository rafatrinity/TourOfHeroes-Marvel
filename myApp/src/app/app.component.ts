import { Component, OnInit, Pipe, PipeTransform, TemplateRef } from '@angular/core';
import { PersonagensService } from './personagem.service';
import { Personagem, data, heroi } from './personagem';
import * as _ from 'lodash';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertService } from './alert.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [PersonagensService]
})

export class AppComponent implements OnInit {
	title = 'Heróis Marvel';
	public Personagem: Personagem[];
	timeA: any[];
	timeB: any[];
	timeV: any[];
	aok: boolean;
	bok: boolean;
	vencedor: boolean;
	somaA: Number;
	somaB: Number;

	constructor(private PersonagensService: PersonagensService,
		private alertService: AlertService,) { }

	ngOnInit() {
		this.getPersonagens();	
	}



	getPersonagens(): void {
		this.timeA=[];
		this.timeB=[];
		this.timeV=[];
		this.aok=false;
		this.bok=false;
		this.vencedor=false;
		this.PersonagensService.getPersonagens()
		.subscribe(ok => {
			this.Personagem = ok;
			console.log(ok)
		},
		error => {
			console.error('deu merda '+error);
		}
		);
	}
	addTimeA(hero: any): void{
		console.log(this.timeA.length);
		if(this.timeA.length < 3){
			if(!this.compareId(hero.id)){
				this.timeA.push(hero);
			}
			else{
				this.alertService.info(hero.name, '<p> O personagem selecionado já está em um time.</p><p>Por favor, selecione outo personagem.</p>');
			}
			if(this.timeA.length == 3 && !this.aok){
				this.aok=true;
				this.alertService.success('Time A completo.','');
			}
			if(this.aok&&this.bok){
				this.resultado();
			}
		}
		else{
			this.alertService.warning('Time A', '<b>está cheio, o time deve ter 3 participantes</b>');
			this.resultado();
		}
	}
	addTimeB(hero: any): void{
		console.log(this.timeB.length);
		if(this.timeB.length < 3){
			if(!this.compareId(hero.id)){
				this.timeB.push(hero);
			}
			else{
				this.alertService.info(hero.name, '<p> O personagem selecionado já está em um time.</p><p>Por favor, selecione outo personagem.</p>');
			}
			if(this.timeB.length == 3 && !this.bok){
				this.bok=true;
				this.alertService.success('Time B completo.','');
			}
			if(this.aok&&this.bok){
				this.resultado();
			}
		}
		else{
			this.alertService.warning('Time B', '<b>está cheio, o time deve ter 3 participantes</b>');
		}
	}
	
	compareId(id) {
		if (this.timeA || this.timeB){
			return this.timeA.filter(x => (id == x.id)).length>0||this.timeB.filter(x => (id == x.id)).length>0;
		}
	}

	resultado(){
		this.somaA=0;
		this.somaB=0;
		if(this.timeA.length==3&&this.timeB.length==3){
			for(let hero of this.timeA){
				this.somaA+=hero.comics.available;
			}
			for(let hero of this.timeB){
				this.somaB+=hero.comics.available;
			}
			if(this.somaA>this.somaB){
				this.timeV=this.timeA;
				this.alertService.success('Vitoria do Time A!', window.location.hash = String(this.somaA));
			}
			else if(this.somaA<this.somaB){
				this.timeV=this.timeB;
				this.alertService.success('Vitoria do Time B!',window.location.hash = String(this.somaB));
			}
			else{
				this.timeV=this.timeA;
				this.timeV=this.timeB;
				this.alertService.warning('Empate!','');
			}
			this.vencedor=true;
		}
	}
}	