import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

	transform(value: string, args: string[]): string {
		const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
		const trail = args.length > 1 ? args[1] : '...';
		return value.length > limit ? value.substring(0, limit) + trail : value;
	}
}

@NgModule({
	declarations: [
	AppComponent,
	TruncatePipe
	],
	imports: [
	HttpClientModule,
	BrowserModule,
	AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
