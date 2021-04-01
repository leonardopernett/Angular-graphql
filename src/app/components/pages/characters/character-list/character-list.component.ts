import { Component, OnInit } from '@angular/core';
import { Character } from '@src/shared/interface/character.interface';
import { DataService } from '@src/shared/services/data.service';
import { take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit {
   personajes:Character[]=[]

  constructor(private dataService:DataService) {}

  ngOnInit(): void {
    this.getChacaters()
  }
  
  getChacaters(){
    this.dataService.getData().pipe(
      take(1),
      tap(({data}:any)=>{
         const {characters} = data
         this.personajes = characters.results
         console.log(this.personajes)
      })
    ).subscribe()
  }


}
