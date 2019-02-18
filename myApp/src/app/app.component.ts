import { Component, OnInit } from '@angular/core';
import { PersonagensService } from './personagem.service';
import { Personagem } from './personagem';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	Personagem: Personagem[];
	constructor(private PersonagensService: PersonagensService) { }

	ngOnInit() {
		this.getPersonagens();
	}
	getPersonagens(): void {
		this.PersonagensService.getPersonagens()
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