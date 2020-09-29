import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';


const routes: Routes = [
  {
    path: "etudiants",
    component: EtudiantsComponent
  },
  {
    path: "etudiants/nouveau",
    component: NewEtudiantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
