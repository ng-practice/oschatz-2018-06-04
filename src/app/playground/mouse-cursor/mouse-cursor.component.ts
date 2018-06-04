import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent {
  x = 0;
  y = 0;

  updatePosition(mouseEventArgs: MouseEvent) {
    this.x = mouseEventArgs.screenX;
    this.y = mouseEventArgs.screenY;
  }
}