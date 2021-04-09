import { Component, OnInit } from '@angular/core';
import { Character } from '@src/shared/interface/character.interface';
import { DataService } from '@src/shared/services/data.service';
import { LocalStorageService } from '@src/shared/services/localStorage.service';
import { take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit {
   characters:Character[]=[]

  constructor(private dataService:DataService, ) {}

  ngOnInit(): void {
    this.getChacaters()
  }
  
  getChacaters(){
    this.dataService.getData().pipe(
      take(1),
      tap(({data}:any)=>{
         const {characters} = data
         this.characters = characters.results
         console.log(this.characters)
         this.dataService.parseCharacter(characters.results)
      })
    ).subscribe()
  }


}
