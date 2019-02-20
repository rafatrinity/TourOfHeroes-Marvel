import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AlertService } from './alert.service';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
	declarations: [
	TruncatePipe,
	AppComponent,
	TruncatePipe
	],
	imports: [
	ModalModule.forRoot(),
	HttpClientModule,
	BrowserModule,
	AppRoutingModule
	],
	providers: [AlertService],
	bootstrap: [AppComponent]
})
export class AppModule { }
