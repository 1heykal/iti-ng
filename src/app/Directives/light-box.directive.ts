import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {
  
  @Input('LightBox') highlightColor: string = "orange";
  @Input() defaultColor: string = "darkblue";

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
   }

   @HostListener('mouseover') onMouseOver(){
    this.elementRef.nativeElement.style.border =  `3px solid ${this.highlightColor}`;
   }

  @HostListener('mouseout') onMouseOut(){
    this.elementRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;

  }





}
