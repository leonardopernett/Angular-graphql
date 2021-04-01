import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private apollo:Apollo) { }

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
}