import { Component, OnInit } from '@angular/core';
import { PersonagensService } from './personagem.service';
import { Personagem } from './personagem';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'Heróis Marvel';
	public Personagem: any[];
	public hero : any[];
	constructor(private PersonagensService: PersonagensService, hero) { }

	ngOnInit() {
		this.getPersonagens();	
	}

	getPersonagens(): void {
		this.PersonagensService.getPersonagens()
		.subscribe(ok => {
			this.Personagem = ok;
		},
		error => {
			console.error('deu merda '+error);
		}
		);
	}
	
}	