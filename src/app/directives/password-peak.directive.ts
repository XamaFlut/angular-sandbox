import { Directive, ElementRef, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appPasswordPeak]'
})
export class PasswordPeakDirective {

  visible = false;
  @HostBinding('class') public eyeClass = 'fa fa-eye-slash';
  @Output() onEyeClick = new EventEmitter<any>();

  constructor() { }

  @HostListener('click', ["$event"]) onClick(evt){
    evt.stopPropagation();
    evt.preventDefault();
    
    this.visible = !this.visible;
    this.eyeClass = this.visible? 'fa fa-eye': 'fa fa-eye-slash';

    this.onEyeClick.emit(this.visible);
  }

}
