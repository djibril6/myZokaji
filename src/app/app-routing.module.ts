import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'conseil',
    loadChildren: () => import('./conseil/conseil.module').then(m => m.ConseilPageModule)
  },
  { path: 'langue', loadChildren: './langue/langue.module#LanguePageModule' },
  { path: 'jeux', loadChildren: './jeux/jeux.module#JeuxPageModule' },
  { path: 'morpion', loadChildren: './morpion/morpion.module#MorpionPageModule' },
  { path: 'appeller', loadChildren: './appeller/appeller.module#AppellerPageModule' },
  { path: 'forum', loadChildren: './forum/forum.module#ForumPageModule' },
  { path: 'avis', loadChildren: './avis/avis.module#AvisPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
