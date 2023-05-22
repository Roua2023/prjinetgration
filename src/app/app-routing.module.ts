import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { TrouverstageComponent } from './pages/trouverstage/trouverstage.component';
import { TrouverstagieresComponent } from './pages/trouverstagieres/trouverstagieres.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { DetailsoffreComponent } from './components/detailsoffre/detailsoffre.component';
import { EtudiantDiplomeComponent } from './pages/etudiant-diplome/etudiant-diplome.component';
import { SocieteComponent } from './pages/societe/societe.component';
import { AjouteroffreComponent } from './components/ajouteroffre/ajouteroffre.component';

const routes: Routes = [

  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path:'acceuil',component:AcceuilComponent},
  {path:'trouverstage',component:TrouverstageComponent},
  {path:'trouverstagieres',component:TrouverstagieresComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'detailsoffre',component:DetailsoffreComponent},
  {path:'trouveremploye',component:EtudiantDiplomeComponent},
  {path:'entreprise',component:SocieteComponent},
  {path:'ajouteroffre',component:AjouteroffreComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
