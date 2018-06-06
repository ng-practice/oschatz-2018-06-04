import {
  Directive,
  HostListener,
  Input,
  Renderer2,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  tooltipElement: HTMLDivElement;

  @Input()
  set tooltip(message: string) {
    this.renderer.setProperty(this.tooltipElement, 'innerHTML', message);
  }

  constructor(private renderer: Renderer2, private element: ElementRef) {
    this.tooltipElement = this.renderer.createElement('div');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.appendChild(this.element.nativeElement, this.tooltipElement);
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.renderer.removeChild(this.element.nativeElement, this.tooltipElement);
  }
}
