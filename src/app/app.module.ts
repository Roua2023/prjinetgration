import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { TrouverstageComponent } from './pages/trouverstage/trouverstage.component';
import { TrouverstagieresComponent } from './pages/trouverstagieres/trouverstagieres.component';
import{ HttpClientModule} from '@angular/common/http';
import { DetailsoffreComponent } from './components/detailsoffre/detailsoffre.component';
import { EtudiantDiplomeComponent } from './pages/etudiant-diplome/etudiant-diplome.component';
import { SocieteComponent } from './pages/societe/societe.component';
import { AjouteroffreComponent } from './components/ajouteroffre/ajouteroffre.component';
import { EtudiantdiplomeComponent } from './components/etudiantdiplome/etudiantdiplome.component';
import { EtudiantstagiairComponent } from './components/etudiantstagiair/etudiantstagiair.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AboutusComponent,
    TrouverstageComponent,
    TrouverstagieresComponent,
    DetailsoffreComponent,
    EtudiantDiplomeComponent,
    SocieteComponent,
    AjouteroffreComponent,
    EtudiantdiplomeComponent,
    EtudiantstagiairComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
