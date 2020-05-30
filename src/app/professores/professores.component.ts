import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';


@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#prof-click-item").removeClass('active');
    $("#suje-click-item").removeClass('active');
    $("#home-click-item").removeClass('active');
    $("#prof-click-item").addClass('active');
    $.ajax({
      type: "GET",
      url: 'assets/professores.json',
      dataType: 'json',
      success: function (obj) {
          console.info(obj);

          $('#tabela_professores').DataTable({
              data: obj,
              columns: [
                  { title:'Foto', data: 'links_das_imagens' },
                  { title:'Nome', data: 'nome_completo' },
                  { title:'Graduação', data: 'titulacao_graduacao'},
                  { title:'Pos-Graduação', data: 'titulacao_pos_graduacao'},
                  { title:'Data de Ingresso', data: 'data_ingresso'},
                  { title:'Link Lattice', data: 'lattes'},
              ]
          });
      
      },
      error: function (obj) {
      }
      });
  }

}
