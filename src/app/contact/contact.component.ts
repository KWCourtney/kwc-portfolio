import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'kwc-contact-bkgrnd');
   }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'kwc-contact-bkgrnd');
  }

  emailstring= "mailto:ken@kennethwcourtney.com?Subject=Hey Ken.  I've got a job I think you'd be perfect for! ";

  ngOnInit(): void {
  }

}
