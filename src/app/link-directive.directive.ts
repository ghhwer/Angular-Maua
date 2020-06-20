import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appLinkDirective]'
})
export class LinkDirectiveDirective {

  constructor() {
  }
  deactivateAll(): void {
    $("#prof-click-item").removeClass('active');
    $("#suje-click-item").removeClass('active');
    $("#home-click-item").removeClass('active');
    $("#gercur-click-item").removeClass('active');
    $("#geralu-click-item").removeClass('active');
  }
  @HostListener('click', ['$event']) onClick(event) {
    this.deactivateAll()
    event.toElement.classList.add('active');
    console.log(event);
 }
}
