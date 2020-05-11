import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { LinksComponent } from './links/links.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { LinksEnComponent } from './links-en/links-en.component';
import { NotesEnComponent } from './notes-en/notes-en.component';
import { FaqEnComponent } from './faq-en/faq-en.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    LinksComponent,
    HomeComponent,
    FaqComponent,
    HomeEnComponent,
    LinksEnComponent,
    NotesEnComponent,
    FaqEnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
