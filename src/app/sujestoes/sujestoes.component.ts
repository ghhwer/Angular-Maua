import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-sujestoes',
  templateUrl: './sujestoes.component.html',
  styleUrls: ['./sujestoes.component.css']
})
export class SujestoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#prof-click-item").removeClass('active');
    $("#suje-click-item").removeClass('active');
    $("#home-click-item").removeClass('active');
    $("#suje-click-item").addClass('active');
  }

}
