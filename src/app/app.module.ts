import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { ClasseComponent } from './classe/classe.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminClassesComponent } from './admin-classes/admin-classes.component';
import { ScolariteComponent } from './scolarite/scolarite.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    NewEtudiantComponent,
    LoginComponent,
    EditEtudiantComponent,
    ClasseComponent,
    EtudiantComponent,
    AdminUsersComponent,
    AdminClassesComponent,
    ScolariteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
