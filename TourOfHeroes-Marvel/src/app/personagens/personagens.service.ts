import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClientModule, HttpParams, HttpHeaders, HttpClient }    from '@angular/common/http';
import { Personagem } from './personagem';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { environment } from '../../environments/environment';
@Injectable({
	providedIn: 'root'
})
export class PersonagensService {
	private handleError: HandleError;

	constructor(
		private http: HttpClient,
		httpErrorHandler: HttpErrorHandler) {
		this.handleError = httpErrorHandler.createHandleError('PersonagensService');
	}
	
	getPersonagens (): Observable<Personagem[]> {
		return this.http.get<Personagem[]>(environment.apiUrl)
		.pipe(
			catchError(this.handleError('getPersonagens', []))
			);
	}
}
