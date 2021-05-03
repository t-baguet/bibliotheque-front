import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechercheComponent } from './pages/recherche/recherche.component';
import { BarreRechercheComponent } from './components/barre-recherche/barre-recherche.component';
import { ResultatRechercheComponent } from './components/resultat-recherche/resultat-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    BarreRechercheComponent,
    ResultatRechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
