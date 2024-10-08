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
      techStack: [
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Firebase' }
      ],
      index: 0
    },
    {
      name: 'El Pollo Loco',
      techStack: [
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' }
      ],
      index: 1
    },
    {
      name: 'Pokédex',
      techStack: [
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Rest-Api' }
      ],
      index: 2
    }
  ];
}
