import { Component, EventEmitter, NgModule, OnInit, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CanvasComponent } from '../canvas/canvas.component';
import { ItemService } from '../services/item-service.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent implements OnInit {

  // objectPlaced: ObjectOnCanvas[] = [];
  #itemsService = inject(ItemService);
  choosedOption: TypeOfObject=TypeOfObject.None;
  x =0 ;
  y = 0;
  height = 0;
  width = 0;
  r = 0;
  options: TypeOfObject[] = [ TypeOfObject.Circle, TypeOfObject.Rectangle, TypeOfObject.Rounded ];
  constructor(private modalService: NgbModal) {
  
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  public addElement(): void{
    switch(this.choosedOption){
        case TypeOfObject.Circle:{
          this.#itemsService.addItemToCanvas(new Circle(this.x,this.y,this.choosedOption,this.r));
          break;
        }

        case TypeOfObject.Rectangle: {
          this.#itemsService.addItemToCanvas(new Rectangle(this.x,this.y,this.choosedOption,this.height,this.width));
          break;
        }

        case TypeOfObject.Rounded: {
          this.#itemsService.addItemToCanvas(new Rounded(this.x,this.y,this.choosedOption,this.height,this.width,this.r));
          break;
        }
    }
      //CanvasComponent.drawObjects(this.#itemsService.allItemsOnCanvas());
  }

  ngOnInit(): void {
  }

}

export enum TypeOfObject {
  Circle = "Circle",
  Rectangle = "Rectangle",
  Rounded = "Rounded",
  None = "None"
}

export class ObjectOnCanvas{
  x: number;
  y: number;
  typeOfObject: TypeOfObject;

  constructor(x: number, y: number, type: TypeOfObject){
    this.x = x;
    this.y = y;
    this.typeOfObject = type;
  }
}

export class Rectangle extends ObjectOnCanvas{
  height: number;
  width: number;

  constructor(x: number, y: number, type: TypeOfObject, height: number, width: number){
      super(x,y,type);
      this.width = width;
      this.height = height;
  }
}

export class Rounded extends Rectangle{
  cornerRadious: number;
  constructor(x: number, y: number, type: TypeOfObject, height: number, width: number, cornerRadious: number){
    super(x,y,type,height,width);
    this.cornerRadious = cornerRadious;
    }
  }


export class Circle extends ObjectOnCanvas{
  radius: number;

  constructor(x: number, y: number, type: TypeOfObject,radius: number){
      super(x,y,type);
      this.radius = radius;
  }
}
