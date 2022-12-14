import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ObjectOnCanvas } from './left-menu/left-menu.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private modalService: NgbModal) {
  }
  
  public open(modal: any): void {
    this.modalService.open(modal);
  }
  title = '2D_APP';
}
