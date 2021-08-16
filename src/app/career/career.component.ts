import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'kwc-career-bkgrnd');
   }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'kwc-career-bkgrnd');
  }

  ngOnInit(): void {
  }
}