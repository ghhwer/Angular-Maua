import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#prof-click-item").removeClass('active');
    $("#suje-click-item").removeClass('active');
    $("#home-click-item").removeClass('active');
    $("#home-click-item").addClass('active');
  }

}
