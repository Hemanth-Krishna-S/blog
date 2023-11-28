import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Directive({ selector: '[imgSrc]' })
export class ImgSrcDirective implements OnInit {
  @Input() imgSrc: string | undefined;
  // @Input() takeFromLocal: boolean | undefined;
  elem: ElementRef;
  imagePath = '/portals/flp360/template1/images/';
  constructor(el: ElementRef) {
    this.elem = el;
  }

  ngOnInit() {
    // if (environment.production) {
    //   if (this.takeFromLocal) {
    //     this.elem.nativeElement.src = environment.baseHref + 'resources/static/src/assets/images/' + this.imgSrc;
    //   } else {
    //     this.elem.nativeElement.src =
    //       environment.cdnURL  + this.imagePath + this.imgSrc;
    //   }
    // } else {
    //   this.elem.nativeElement.src = environment.baseHref + '/assets/images/' + this.imgSrc;
    // }
    this.elem.nativeElement.src = environment.href + 'assets/' + this.imgSrc;
  }
}
