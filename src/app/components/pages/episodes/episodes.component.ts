import { Component, OnInit } from '@angular/core';
import { DataService } from '@src/shared/services/data.service';
import { of, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-episodes',
  template: `
      <div class="container">
      <ul class="episodes__list">
      <li *ngFor="let episode of episodes | async ">
        {{episode.episode}} -  {{episode.name}}
      </li>
      </ul>
    </div>
  `,
  styles: [`
     
  .container{
    width:50%;
    margin-bottom:80px !important;
   
  }

  @media screen and (max-width:500px){
    .container{
      width:90%;
    }
  }
  
  `]
})
export class EpisodesComponent implements OnInit {
  episodes:Observable<string> 
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getAllEpisodes()
  }

 

  getAllEpisodes(){
    this.dataService.getData().pipe(
      take(1),
      tap(({data}:any)=>{
         const {episodes} = data
         this.episodes = of(episodes.results)
      })
    ).subscribe()
  }

}
