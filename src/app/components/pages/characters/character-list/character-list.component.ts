import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnInit, ElementRef, Inject } from '@angular/core';
import { Character } from '@src/shared/interface/character.interface';
import { DataService } from '@src/shared/services/data.service';
import { pluck, take, tap, withLatestFrom } from 'rxjs/operators';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit {
   characters:Character[]=[]
   verify:boolean = false
   pageActual:number= 2

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private dataService:DataService,
    private element:ElementRef ) {}

  ngOnInit(): void {
    this.getChacaters()
  }
  
  getChacaters(){
    this.dataService.getData().pipe(
      take(1),
      tap(({data}:any)=>{
         const {characters} = data
         this.characters = characters.results
     
         this.dataService.parseCharacter(characters.results)
      })
    ).subscribe()
  }
  
  @HostListener('window:scroll')
  onwindowScroll(){
    this.document.documentElement.scrollTop  > 500 
      ? this.verify =  true
      : this.verify =  false
  }
   onScrollTop(){
    this.document.documentElement.scrollIntoView({block:'start',behavior:'smooth'})
   }

   onScroll(){
     this.pageActual++
     this.dataService.getDataByPAge(this.pageActual+1).pipe(
       take(1),
       pluck('data','characters', 'results'),
       tap((res:any)=>{
         this.characters =[...this.characters, ...res]
         console.log(res)
         console.log(this.pageActual)

       })
     ).subscribe()
   }
}
