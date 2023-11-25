import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { CanvasComponent } from './canvas/canvas.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ElementsComponent } from './elements-list/elements/elements.component';
import { ListItemComponent } from './elements-list/list-item/list-item/list-item.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    CanvasComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    BrowserModule,
    NgbModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    ElementsComponent,
    ListItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
