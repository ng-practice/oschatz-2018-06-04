import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    TooltipDirective
  ],
  exports: [
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    TooltipDirective
  ]
})
export class PlaygroundModule {}
