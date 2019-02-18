import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClientModule, HttpParams, HttpHeaders, HttpClient }    from '@angular/common/http';
import { Personagem } from './personagem';
import { environment } from '../environments/environment';
@Injectable({
	providedIn: 'root'
})
export class PersonagensService {

	BaseUrl : string = environment.apiUrl;

	constructor(private httpC: HttpClient) {
		
	}
	
	getPersonagens(): Observable<Personagem[]>{
		return this.httpC.get<Personagem[]>(`${this.BaseUrl}`);
	}
}

