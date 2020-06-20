import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Aluno } from '../model/aluno'

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})

export class AlunosFormComponent implements OnInit {
  @Output() saveAluno = new EventEmitter()
  aluno: Aluno = new Aluno();

  cursos = [
    'Engenharia de Alimentos', 
    'Engenharia Civil', 
    'Engenharia de Computação', 
    'Engenharia de Controle e Automação',
    'Engenharia Elétrica',
    'Engenharia Eletrônica',
    'Engenharia Mecânica',
    'Engenharia de Produção',
    'Engenharia Quimica',
    'Adiministração',
    'Design'
  ]

  constructor() { }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  adicionarAluno(alunoForm) {
    const nome = alunoForm.value.nome
    const idade = alunoForm.value.idade
    const email = alunoForm.value.email
    const curso = alunoForm.value.curso
    
    // Validation
    if(nome == "" || idade == "" || email == "" || curso == "" || curso == "Selecione" )
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Oops...',
        text: 'Todos os campos devem ser preenchidos!',
      })
    else if(! this.validateEmail(email))
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Ué...',
        text: 'O email parece inválido!',
      })
    else{
      // Popula Instância
      this.aluno.nome = nome
      this.aluno.idade = idade
      this.aluno.email = email
      this.aluno.curso = curso
      this.saveAluno.emit(this.aluno) // Emite aluno
      this.aluno = new Aluno()        // Limpa instância
    }
  }

  ngOnInit(): void {
  }

}
