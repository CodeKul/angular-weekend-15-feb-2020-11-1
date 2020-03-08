import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appMagic]'
})
export class MagicDirective implements OnInit {

  @HostBinding('style.color')
  color : string

  constructor(
    private elRf: ElementRef,
    private rend: Renderer2
  ) {
  }

  ngOnInit() {
    // this.elRf.nativeElement.style.border = '1px solid red'

    // this.rend.setStyle(this.elRf.nativeElement, 'border', '1px solid red')
  }

  @HostListener('keyup')
  onKeyUp() {
    const red = Math.random() * 256
    const green = Math.random() * 256
    const blue = Math.random() * 256

    this.color = `rgb(${red}, ${green}, ${blue})`
    
  }
}
