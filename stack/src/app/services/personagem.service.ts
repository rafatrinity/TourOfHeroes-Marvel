import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Personagem } from '../personagem/personagem';
import { HttpClientModule, HttpParams, HttpHeaders, HttpClient }    from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PersonagemService {

	BaseUrl : string = environment.apiUrl;
  

	constructor(private httpC: HttpClient) {
		
	}
	
	getPersonagens(): Observable<Personagem[]>{
		return this.httpC.get<Personagem[]>(`${this.BaseUrl}`);
	}
  
}

