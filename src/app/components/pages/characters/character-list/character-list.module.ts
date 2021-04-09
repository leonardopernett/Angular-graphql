import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CharacterCardModule } from '../character-card/character-card.module';


@NgModule({
  declarations: [CharacterListComponent],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    CharacterCardModule
  ]
})
export class CharacterListModule { }
