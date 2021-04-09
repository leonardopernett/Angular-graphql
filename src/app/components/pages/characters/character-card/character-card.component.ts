import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LocalStorageService } from '@src/shared/services/localStorage.service';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
 @Input('character') character;
 navigation:NavigationExtras = {
   state:{
     value:null
   }
 }
  constructor(private router:Router, private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
  }

  getIcon(){
    return this.character.isfavorite ? 'heart-solid.svg': 'heart.svg'
  }

  toggeFavorite(){
    const isfavorite = this.character.isfavorite
    this.getIcon()
    this.character.isfavorite = !isfavorite
    this.localStorageService.addOrRemovefavorite(this.character)
  }

  getCharater(value){
    this.navigation.state.value = value
    this.router.navigate(['/character-details'],this.navigation)
  }

}
