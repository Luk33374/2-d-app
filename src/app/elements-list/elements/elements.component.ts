import { Component, Input, inject } from '@angular/core';
import { ObjectOnCanvas } from 'src/app/left-menu/left-menu.component';
import { ListItemComponent } from '../list-item/list-item/list-item.component';
import { CommonModule } from '@angular/common';
import { ItemService } from 'src/app/services/item-service.service';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css'],
  imports:[ListItemComponent, CommonModule, MatListModule],
  standalone: true
})
export class ElementsComponent {
  #itemsService = inject(ItemService);
  protected allItemsOnCanvas = this.#itemsService.allItemsOnCanvas();

}
