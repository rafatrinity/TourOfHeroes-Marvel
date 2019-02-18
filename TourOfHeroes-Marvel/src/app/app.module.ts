import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent }         from './app.component';
import { AuthInterceptor }          from './auth.service';
import { PersonagensComponent }      from './personagens/personagens.component';
import { HttpErrorHandler }     from './http-error-handler.service';
//import { MessageService }       from './message.service';
//import { MessagesComponent }    from './messages/messages.component';


@NgModule({
	imports: [
	BrowserModule,
	FormsModule,
	// import HttpClientModule after BrowserModule.
	HttpClientModule,
	HttpClientXsrfModule.withOptions({
		cookieName: 'My-Xsrf-Cookie',
		headerName: 'My-Xsrf-Header',
	}),

	// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
	// and returns simulated server responses.
	// Remove it when a real server is ready to receive requests.
	
	/*HttpClientInMemoryWebApiModule.forRoot(
		InMemoryDataService, {
			dataEncapsulation: false,
			passThruUnknownUrl: true,
			put204: false // return entity after PUT/update
		}
		)*/
		],
		declarations: [
		AppComponent,
		PersonagensComponent,
		//MessagesComponent,
		],
		providers: [
		AuthInterceptor,
		HttpErrorHandler,
		PersonagensComponent
		//MessageService,
		],
		bootstrap: [ AppComponent ]
	})
export class AppModule {}