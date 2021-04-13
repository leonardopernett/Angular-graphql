import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListModule } from './components/pages/characters/character-list/character-list.module';
import { GraphQLModule } from './graphql.module';
import { HeaderModule } from './shared/components/header/header.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { NoImageDirective } from './no-image.directive'


@NgModule({
  declarations: [
    AppComponent,
    NoImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HeaderModule,
    HttpClientModule,
    CharacterListModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
