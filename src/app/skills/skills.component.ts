import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnDestroy {


  skills: any[] = [
    {
      id: 1,
      icon: 'fas fa-vector-square',
      name: 'adobe cc',
    },
    {
      id: 101,
      icon: 'fas fa-history',
      name: 'agile',
    },
    {
      id: 2,
      icon: 'fab fa-angular',
      name: 'angular cli',
    },
    {
      id: 3,
      icon: 'fab fa-angular',
      name: 'angular / material',
    },
    {
      id: 4,
      icon: 'fas fa-mobile-alt',
      name: 'app design',
    },
    {
      id: 6,
      icon: 'fab fa-bootstrap',
      name: 'bootstrap / utilities',
    },
    {
      id: 7,
      icon: 'fas fa-code',
      name: 'css3',
    },
    {
      id: 8,
      icon: 'fas fa-code-branch',
      name: 'devops',
    },
    {
      id: 9,
      icon: 'fas fa-th',
      name: 'flexbox',
    },
    {
      id: 91,
      icon: 'fab fa-git-alt',
      name: 'git',
    },
    {
      id: 11,
      icon: 'fas fa-code',
      name: 'html5',
    },
    {
      id: 12,
      icon: 'fab fa-js',
      name: 'javascript',
    },
    {
      id: 13,
      icon: 'fab fa-js',
      name: 'jquery',
    },
    {
      id: 131,
      icon: 'fas fa-code',
      name: 'sass',
    },
    {
      id: 14,
      icon: 'fas fa-code',
      name: 'scss',
    },
    {
      id: 15,
      icon: 'fab fa-microsoft',
      name: 'sharepoint',
    },

    {
      id: 16,
      icon: 'fas fa-file-code',
      name: 'tech spec',
    },
    {
      id: 17,
      icon: 'fas fa-image',
      name: 'ui/ux design',
    },
    {
      id: 170,
      icon: 'fas fa-image',
      name: 'ui/ux development',
    },
    {
      id: 18,
      icon: 'fas fa-poll',
      name: 'wireflows',
    },
    {
      id: 19,
      icon: 'fas fa-file-invoice',
      name: 'wireframes',
    },
  ]


  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'kwc-skills-bkgrnd');
   }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'kwc-skills-bkgrnd');
  }

  ngOnInit(): void {
  }

}
