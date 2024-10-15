import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showArrowHover: { [key: number]: boolean } = {};
  imgPathProject: string='';

  onMouseEnter(index: number) {
    this.showArrowHover[index] = true;
    this.hoverProject(index);
  }
  
  onMouseLeave(index: number) {
    this.showArrowHover[index] = false;
    this.imgPathProject = '';
  }

  hoverProject(index: number) {
    if (index === 0) {
      this.imgPathProject = 'assets/img/join.jpg';
    } else if (index === 1) {
      this.imgPathProject = 'assets/img/El Pollo Loco.png';
    } else if (index === 2) {
      this.imgPathProject = 'assets/img/Pokedex.png';
    }
  }

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

