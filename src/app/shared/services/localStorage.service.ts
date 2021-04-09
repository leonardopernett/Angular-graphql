import { Injectable } from "@angular/core";
import { Character } from "../interface/character.interface";

@Injectable({
  providedIn:'root'
})

export class LocalStorageService {

  public charactersFavorites=[];

   constructor(){
      this.initialStorage()
   }
   
   addOrRemovefavorite(character:Character){
      const {id}  = character
      let current = this.localStorageFavoriteCharacter()
      const found = !!current.find((fav:Character)=>fav.id===id)
      found ? this.removeFavorite(id) : this.addFavorite(character)
   }

   addFavorite(character:Character){
    let current = this.localStorageFavoriteCharacter()
    localStorage.setItem('myfavorites',JSON.stringify([...current, character]))
    this.charactersFavorites = [...current, character]
   }

   removeFavorite(id:number){
    let current      = this.localStorageFavoriteCharacter()
    const newCurrent = current.filter((fav)=>fav.id !==id)
    localStorage.setItem('myfavorites',JSON.stringify([...newCurrent]))
    this.charactersFavorites = [...newCurrent]
   }
  
   localStorageFavoriteCharacter(){
    try {
       const characterFav       = JSON.parse(localStorage.getItem('myfavorites'))
       this.charactersFavorites = characterFav
       return characterFav
    } catch (error) {
       console.log(error)
    }
   }

   initialStorage(){
     const current = JSON.parse(localStorage.getItem('myfavorites'))
     if(!current) localStorage.setItem('myfavorites',JSON.stringify([]))
     this.localStorageFavoriteCharacter()
   }

}