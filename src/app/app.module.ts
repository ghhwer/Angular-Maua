import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessoresComponent } from './professores/professores.component';
import { SujestoesComponent } from './sujestoes/sujestoes.component';
import { HomeComponent } from './home/home.component';
import { AdicionarCursosComponent } from './adicionar-cursos/adicionar-cursos.component';
import { LinkDirectiveDirective } from './link-directive.directive';
import { Router } from '@angular/router';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosListComponent } from './alunos-list/alunos-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    SujestoesComponent,
    HomeComponent,
    AdicionarCursosComponent,
    LinkDirectiveDirective,
    CursosListComponent,
    CursosFormComponent,
    AlunosComponent,
    AlunosFormComponent,
    AlunosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(private router: Router) {
    let r = this.router
    setTimeout(function(){
      let url = r.url.split('/')[1]
      if(url.includes('home'))
        $("#home-click-item").addClass('active');
      if(url.includes('professores'))
        $("#prof-click-item").addClass('active');
      if(url.includes('sujestoes'))
        $("#suje-click-item").addClass('active');
      if(url.includes('adicionacurso'))
        $("#adcc-click-item").addClass('active');  
    },100);
  }
  
}
