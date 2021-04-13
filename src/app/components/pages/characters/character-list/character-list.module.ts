import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfiniteScrollModule} from 'ngx-infinite-scroll'
import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CharacterCardModule } from '../character-card/character-card.module';


@NgModule({
  declarations: [CharacterListComponent],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    CharacterCardModule,
    InfiniteScrollModule
  ]
})
export class CharacterListModule { }
