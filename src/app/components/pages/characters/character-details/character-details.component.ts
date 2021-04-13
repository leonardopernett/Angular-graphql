import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Character } from '@src/shared/interface/character.interface';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
   character:Character;

  constructor(private router:Router) {
      this.character = this.router.getCurrentNavigation().extras.state.value
   }

  ngOnInit(): void {
    console.log(this.character)
  }

}
