import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-icons',
  templateUrl: './social-media-icons.component.html',
  styleUrls: ['./social-media-icons.component.scss']
})
export class SocialMediaIconsComponent implements OnInit {

  constructor() { }

  emailstring= "mailto:ken@kennethwcourtney.com?Subject=Hey Ken.  I've got a job I think you'd be perfect for!";

  ngOnInit(): void {
  }

}
