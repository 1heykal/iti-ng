import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{
  
  @Input('LightBox') highlightColor: string = "orange";
  @Input() defaultColor: string = "darkblue";

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(): void {
    this.elementRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;

  }

   @HostListener('mouseover') onMouseOver(){
    this.elementRef.nativeElement.style.border =  `3px solid ${this.highlightColor}`;
   }

  @HostListener('mouseout') onMouseOut(){
    this.elementRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;

  }





}
