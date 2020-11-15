import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { LoginComponent } from './login/login.component';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { ClasseComponent } from './classe/classe.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminClassesComponent } from './admin-classes/admin-classes.component';
import { ScolariteComponent } from './scolarite/scolarite.component';


const routes: Routes = [
  {   path: "etudiants", component: EtudiantsComponent  },
  {   path: "etudiants/nouveau", component: NewEtudiantComponent },
  {   path: "login", component: LoginComponent },
  {
      path: "edit-etudiant/:id", component: EditEtudiantComponent
  },
  {
    path: "etudiant/:urlEtu", component:EtudiantComponent
  },

  {
    path: "adminUsers", component: AdminUsersComponent
  },

  {
    path: "adminClasses", component: AdminClassesComponent
  },
  {
    path: "classes", component: ClasseComponent
  },
  { path: "scolarites", component: ScolariteComponent }
  /*{
       path:"", redirectTo:"/etudiants",pathMatch:'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
