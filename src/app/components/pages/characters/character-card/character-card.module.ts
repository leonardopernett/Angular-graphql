import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterCardRoutingModule } from './character-card-routing.module';
import { CharacterCardComponent } from './character-card.component';


@NgModule({
  declarations: [CharacterCardComponent],
  imports: [
    CommonModule,
    CharacterCardRoutingModule
  ],
  exports:[CharacterCardComponent]
})
export class CharacterCardModule { }
