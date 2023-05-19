import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { TrouverstageComponent } from './pages/trouverstage/trouverstage.component';
import { TrouverstagieresComponent } from './pages/trouverstagieres/trouverstagieres.component';
import{ HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AboutusComponent,
    TrouverstageComponent,
    TrouverstagieresComponent
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
