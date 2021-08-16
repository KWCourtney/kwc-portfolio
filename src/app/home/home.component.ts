import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'kwc-home-bkgrnd');
   }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'kwc-home-bkgrnd');
  }

  ngOnInit(): void {
  }

}

