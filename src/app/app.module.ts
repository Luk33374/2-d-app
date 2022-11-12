import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { CanvasComponent } from './canvas/canvas.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
