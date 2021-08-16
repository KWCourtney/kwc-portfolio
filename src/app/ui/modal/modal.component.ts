import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../../services/projects.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  projects: any[];

  constructor (private projectsService: ProjectsService) {
    this.projects = projectsService.getProjects();
  }

}
