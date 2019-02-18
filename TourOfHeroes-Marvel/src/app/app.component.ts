import { Component, OnInit } from '@angular/core';
import { PersonagensService } from './personagens/personagens.service'
import { Personagem } from './personagens/personagem';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'TourOfHeroes-Marvel';
	Personagem: Personagem[];
	constructor(private personagensService: PersonagensService) { }

	ngOnInit() {
		this.getPersonagens();
	}

	getPersonagens(): void {
		this.personagensService.getPersonagens()
		.subscribe(ok => {
			this.Personagem=ok;
			console.log(ok);
		},
		error => {
			console.error('deu merda '+error);
		}
		);
	}
}
