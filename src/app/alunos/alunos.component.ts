import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos = [
    new Aluno("Caio Petrelli Cominato", 18, "caiopetrellicominato@gmail.com", "Engenharia da Computação"),
    new Aluno("Arthur Moledo do Val", 33, "ass.arthurdoval@gmail.com", "Engenharia Química"),
    new Aluno("Alfredo Egydio Arruda Villela Filho", 51, "alfredo.egydio@itausa.com.br", "Engenharia Mecânica"),
    new Aluno("Delcídio do Amaral", 65, "delcidio_amaral@gmail.com", "Engenharia de Produção"),
    new Aluno("Mario Longhi Filho", 64, "mario_longhi@ussteal.com", "Engenharia Metalúrgica"),
  ]

  saveAluno(aluno: Aluno){
    this.alunos.unshift(aluno)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
