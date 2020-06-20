import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.css']
})
export class AlunosListComponent implements OnInit {

  @Input() alunos = [];

  constructor() { }

  ngOnInit(): void {
  }

}
