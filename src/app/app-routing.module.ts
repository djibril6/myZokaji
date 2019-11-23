import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'langue',
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
  { path: 'morpion', loadChildren: './morpion/morpion.module#MorpionPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
