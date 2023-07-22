import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { AddpostsComponent } from './addposts/addposts.component';
import { ListesComponent } from './listes/listes.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AddpostsComponent,
    ListesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
