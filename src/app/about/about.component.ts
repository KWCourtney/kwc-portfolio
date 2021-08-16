import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'kwc-about-bkgrnd');
   }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'kwc-about-bkgrnd');
  }

  ngOnInit(): void {
  }

}
