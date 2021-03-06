import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'/character-list', pathMatch:'full'},
  { path: 'home',loadChildren:()=>import('./components/pages/home/home.module').then(m=>m.HomeModule) }, 
  { path: 'episodes', loadChildren:()=>import('./components/pages/episodes/episodes.module').then(m=>m.EpisodesModule) },
  { path:'character-list', loadChildren:()=>import('./components/pages/characters/character-list/character-list.module').then(m=>m.CharacterListModule)},
  { path:'character-details', loadChildren:()=>import('./components/pages/characters/character-details/character-details.module').then(m=>m.CharacterDetailsModule)},
  { path: 'character-card', loadChildren: () => import('./components/pages/characters/character-card/character-card.module').then(m => m.CharacterCardModule) },
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  { path: '**', loadChildren: () => import('./components/pages/not-found/not-found.module').then(m => m.NotFoundModule) }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
