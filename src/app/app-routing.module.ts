import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';
import { SujestoesComponent } from './sujestoes/sujestoes.component';
import { AdicionarCursosComponent } from './adicionar-cursos/adicionar-cursos.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'professores', component: ProfessoresComponent },
  { path: 'sujestoes', component: SujestoesComponent }, 
  { path: 'adicionacurso', component: AdicionarCursosComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
