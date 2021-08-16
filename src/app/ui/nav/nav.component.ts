import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('#toggle').click(function() {
      $(this).toggleClass('active');
      $('#overlay').toggleClass('open');
      // Hide Logo When Open
      // $('.kwc-logo-wrap').toggleClass('hidden');
    });

    $(".button_container").click(function() {
      $(this).toggleClass("change");
    });


    // Updated Original > Close Menu on Link Click
    $("#overlay-menu a").on("click", function() {
      $(".button_container").removeClass("change");
      $("#toggle").removeClass("active");
      $("#overlay").removeClass("open");
      // Show Logo After Link Click
      $('.kwc-logo-wrap').removeClass('hidden');
    });

  }
}