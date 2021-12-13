import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  constructor() {
    console.log('highlighted directive');
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  mouseOver() {
    this.isHighlighted = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
  }

}


// #region comments


  // this is a host binding, that can be used in the host element, className is a alias for class,
  // another way is adding class.highlighted and simple return it as true in the method

  // @HostBinding('class.highlighted')
  // get cssClasses() {
  //   return true;
  // }

  // @HostBinding('className') 
  // get cssClasses() {
  //   return 'highlighted';
  // }


  // @HostBinding('attr.disabled')
  // get disabled() {
  //   return true;
  // }



// #endregion


