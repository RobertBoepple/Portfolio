import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Join',
      techStack: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      index: 0
    },
    {
      name: 'El Pollo Loco',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      index: 1
    },
    {
      name: 'Pokédex',
      techStack: ['JavaScript', 'HTML', 'CSS', 'Rest-Api'],
      index: 2
    }
  ];
}
