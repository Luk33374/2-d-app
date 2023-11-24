import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Circle, ObjectOnCanvas, Rectangle, TypeOfObject } from '../left-menu/left-menu.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent {
  
  @Input() objectsToDraw = new EventEmitter<ObjectOnCanvas[]>();

  constructor() { }

  public static drawObjects(objecttoPlace: ObjectOnCanvas[]): void{
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;
    var ctx = c?.getContext("2d");
    

    objecttoPlace.forEach( element =>{
      switch(element.typeOfObject){
        case TypeOfObject.Circle:{
          var circle = element as Circle;
          if(circle.radius&&circle.x&&circle.y){
            ctx?.beginPath();
            ctx?.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
            ctx?.stroke();
          }
          break;
        }
        case TypeOfObject.Rectangle:{
          var rectangle = element as Rectangle;
          if(rectangle.height&&rectangle.width&&rectangle.x&&rectangle.y){
            ctx?.beginPath();
            ctx?.rect(rectangle.x,rectangle.y,rectangle.width,rectangle.height);
            ctx?.stroke();
          }
          break;
        }
        case TypeOfObject.Rounded:{
          var rounded = element as Rectangle;
          if(rounded.height&&rounded.width&&rounded.x&&rounded.y){
            ctx?.beginPath();
            ctx?.rect(rounded.x,rounded.y,rounded.width,rounded.height);
            ctx?.stroke();
          }
          break;
        }
      }
    });
    
    
  }

}
