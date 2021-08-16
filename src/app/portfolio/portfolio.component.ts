import { Component } from '@angular/core';
// import { Globals } from './../global-variables';
import { ProjectsService } from './../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent  {
  page = 1;
  
  projects: any[];

  constructor (private projectsService: ProjectsService) {
    this.projects = projectsService.getProjects();
  }

  // constructor(public globals: Globals){
  // }

}
