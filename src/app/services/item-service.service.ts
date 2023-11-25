import { Injectable, signal } from '@angular/core';
import { ObjectOnCanvas } from '../left-menu/left-menu.component';
import { CanvasComponent } from '../canvas/canvas.component';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  #itemsOnCanvasSignal = signal<ObjectOnCanvas[]>([]);
  public allItemsOnCanvas = this.#itemsOnCanvasSignal.asReadonly();

  constructor() { }

  public addItemToCanvas(itemToAdd: ObjectOnCanvas): void{
    const items = this.allItemsOnCanvas();
    items.push(itemToAdd);
    this.#itemsOnCanvasSignal.set(items);
    this.redrawItemsOnCanvas();
  }

  public deleteItem(item: ObjectOnCanvas): void {
    const items = this.allItemsOnCanvas();
    items.splice(items.indexOf(item),1);
    this.#itemsOnCanvasSignal.set(items);
    this.redrawItemsOnCanvas();
  }

  private redrawItemsOnCanvas(): void {
    CanvasComponent.drawObjects(this.allItemsOnCanvas());
  }
}
