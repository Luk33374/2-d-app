import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor(private modalService: NgbModal) {
    this.favoriteSeason='';
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
  }

}
