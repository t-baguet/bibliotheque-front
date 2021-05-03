import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechercheComponent } from './pages/recherche/recherche.component';

const appRoutes: Routes = [
  { path: '', component: RechercheComponent },
  { path: '**', component:  RechercheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
