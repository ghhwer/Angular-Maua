import { Component, OnInit } from '@angular/core';
import { Curso } from './curso.model';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-adicionar-cursos',
  templateUrl: './adicionar-cursos.component.html',
  styleUrls: ['./adicionar-cursos.component.css']
})
export class AdicionarCursosComponent implements OnInit {

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

  ngOnInit(): void {
  }

  saveCurso(nomeDoCurso: string){
  if(nomeDoCurso == "") 
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Oops...',
      text: 'Nome do curso não pode ser vazio!',
    })
  else if(this.cursos.includes(nomeDoCurso)) 
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Oxê!',
      text: 'Esse curso já existe!',
    })
  else{
    this.cursos.push(nomeDoCurso)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Adicionado!',
    })
  }

}
}
