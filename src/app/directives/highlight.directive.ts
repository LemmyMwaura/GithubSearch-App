import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
		this.textHighlight("translateY(-1rem)")			    	
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
		this.textHighlight("translateY(0rem)")			    	
  }

  private textHighlight(action: string){
    this.elem.nativeElement.style.transform = action
  }
}