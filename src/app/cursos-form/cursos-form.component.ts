import { 
  Component, 
  OnInit, 
  Output, 
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Curso } from '../adicionar-cursos/curso.model';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {
  @Output() saveCurso = new EventEmitter()
  @ViewChild('nomeCurso') nomeCurso: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  doSend(): void{
    this.saveCurso.emit(this.nomeCurso.nativeElement.value)
    this.nomeCurso.nativeElement.value = ""
  }

}
