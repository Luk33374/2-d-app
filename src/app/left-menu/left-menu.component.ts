import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent implements OnInit {

  objectPlaced: ObjectOnCanvas[] = [];
  choosedOption: TypeOfObject=TypeOfObject.None;
  x: number=0;
  y: number=0;
  height: number=0;
  width: number=0;
  r: number=0;
  options: TypeOfObject[] = [ TypeOfObject.Circle, TypeOfObject.Rectangle, TypeOfObject.Rounded ];
  constructor(private modalService: NgbModal) {
  
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  public addElement(): void{
    switch(this.choosedOption){
        case TypeOfObject.Circle:{
          this.objectPlaced.push(new Circle(this.x,this.y,this.choosedOption,this.r));
          break;
        }

        case TypeOfObject.Rectangle: {
          this.objectPlaced.push(new Rectangle(this.x,this.y,this.choosedOption,this.height,this.width));
          break;
        }

        case TypeOfObject.Rounded: {
          this.objectPlaced.push(new Rectangle(this.x,this.y,this.choosedOption,this.height,this.width));
          break;
        }
    }
      CanvasComponent.drawObjects(this.objectPlaced);
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

  constructor(x: number, y: number, type: TypeOfObject,height: number, width: number){
    super(x,y,type);
    this.width = width;
    this.height = height;
  }
}

export class Circle extends ObjectOnCanvas{
  radius: number;

  constructor(x: number, y: number, type: TypeOfObject,radius: number){
    super(x,y,type);
    this.radius = radius;
  }
}
