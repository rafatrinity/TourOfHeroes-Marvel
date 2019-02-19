import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PersonagensService } from './personagem.service';
import { Personagem, data } from './personagem';
import * as _ from 'lodash';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [PersonagensService]
})

export class AppComponent implements OnInit {
	title = 'Heróis Marvel';
	public Personagem: Personagem[];
	timeA: Array<any>;
	timeB: Array<any>;
	constructor(private PersonagensService: PersonagensService) { }

	ngOnInit() {
		this.getPersonagens();	
	}

	getPersonagens(): void {
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
	addTimeA(): void{

	}
	addTimeB(): void{

	}
	
}	