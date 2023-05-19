import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { TrouverstageComponent } from './pages/trouverstage/trouverstage.component';
import { TrouverstagieresComponent } from './pages/trouverstagieres/trouverstagieres.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

const routes: Routes = [

  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path:'acceuil',component:AcceuilComponent},
  {path:'trouverstage',component:TrouverstageComponent},
  {path:'trouverstagieres',component:TrouverstagieresComponent},
  {path:'aboutus',component:AboutusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
