import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular'
import { Character } from '../interface/character.interface';
import { LocalStorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private apollo:Apollo, private localStorageService:LocalStorageService) { }

  getData(){
   return this.apollo.watchQuery({
      query:gql`
        {
          episodes{
              results{
                  name
                  episode
              }
          }
          characters{
              results{
                  id
                  gender
                  status
                  species
                  name
                  image
      
            }
          }
        }
      
      `
      
    }).valueChanges
  }

 getOneData(id:number){
  return this.apollo.watchQuery({
    query:gql`
        {
            character(id:${id}){
              id
              name
              species
              status
              gender
              image
           }
        }
        `
  }).valueChanges


 }

 getDataByPAge(page:number){
     return  this.apollo.watchQuery({
        query:gql`
          {
              characters(page:${page}){
                results{
                    id
                    gender
                    status
                    species
                    name
                    image
        
              }
            }
          }
        
        `
     }).valueChanges
 }

  parseCharacter(characters:Character[]){
          const current = this.localStorageService.localStorageFavoriteCharacter();
           const newData = characters.map(character=>{
           const found = !!current.find(fav=> fav.id === character.id)

           return {...character, isfavorite:found}
     })
     this.localStorageService.charactersFavorites = newData
  }
}