import { Component, OnInit, Input, Output } from '@angular/core';
import { Curso } from '../adicionar-cursos/curso.model';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  @Input() cursos = [];

  constructor() { }

  ngOnInit(): void {
  }

}
