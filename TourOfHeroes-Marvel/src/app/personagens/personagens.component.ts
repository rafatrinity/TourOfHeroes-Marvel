import { Component, OnInit } from '@angular/core';
import { PersonagensService } from './personagens.service';
import { Personagem } from './personagem';

@Component({
	//selector: 'app-heroes',
	templateUrl: './personagem.html',
	providers: [ PersonagensService ],
	//styleUrls: ['./heroes.component.css']
})

export class PersonagensComponent implements OnInit {
	Personagem: Personagem[];
	constructor(private personagensService: PersonagensService) { }

	ngOnInit() {
		this.getPersonagens();
	}

	getPersonagens(): void {
		this.personagensService.getPersonagens()
		.subscribe(ok => {
			this.Personagem = ok;
			console.log(ok);
		},
		error => {
			console.error('deu merda '+error);
		}
		);
	}
}	