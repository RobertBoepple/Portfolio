import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: string;
  name: string;
  techStack: { name: string, image: string }[];
  description: string;
  githubLink: string;
  liveLink: string;
  imgPath: string;
  index: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  showArrowHover: { [key: number]: boolean } = {};
  imgPathProject: string = '';
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: '01',
      name: 'Join',
      techStack: [
        { name: 'JavaScript', image: 'assets/icons/JavaScript.svg' },
        { name: 'HTML', image: 'assets/icons/HTML.svg' },
        { name: 'CSS',image: 'assets/icons/CSS.svg' },
        { name: 'Firebase', image: 'assets/icons/Firebase.svg' },
      ],
      description:
        'Ein Kanban-Board Projekt für Aufgabenverwaltung und Teamkollaboration.',
      githubLink: 'https://github.com/RobertBoepple/Join',
      liveLink: 'https://robert-boepple.de/Join/html',
      imgPath: 'assets/img/join 1.jpg',
      index: 0,
    },
    {
      id: '02',
      name: 'El Pollo Loco',
      techStack: [
         { name: 'JavaScript', image: 'assets/icons/JavaScript.svg' },
         { name: 'HTML', image: 'assets/icons/HTML.svg' }, 
         { name: 'CSS', image: 'assets/icons/CSS.svg' }
        ],
      description: 'Ein JavaScript-basiertes Jump-and-Run Spiel.',
      githubLink: 'https://github.com/RobertBoepple/El-Pollo-Loco',
      liveLink: 'https://robert-boepple.de/El-Pollo-Loco',
      imgPath: 'assets/img/El Pollo Loco 1.png',
      index: 1,
    },
    {
      id: '03',
      name: 'Pokédex',
      techStack: [
        { name: 'JavaScript', image: 'assets/icons/JavaScript.svg' },
        { name: 'HTML', image: 'assets/icons/HTML.svg' },
        { name: 'CSS', image: 'assets/icons/CSS.svg' },
        { name: 'Rest-Api', image: 'assets/icons/JavaScript.svg' },
      ],
      description: 'Eine Pokémon-Enzyklopädie mit Daten aus der PokéAPI.',
      githubLink: 'https://github.com/RobertBoepple/pokedex',
      liveLink: 'https://robert-boepple.de/pokedex',
      imgPath: 'assets/img/Pokedex 1.png',
      index: 2,
    },
  ];

  onMouseEnter(index: number) {
    this.showArrowHover[index] = true;
    this.hoverProject(index);
  }

  onMouseLeave(index: number) {
    this.showArrowHover[index] = false;
    this.imgPathProject = '';
  }

  hoverProject(index: number) {
    const project = this.projects[index];
    if (project) {
      this.imgPathProject = project.imgPath;
    }
  }

  openProjectDetails(project: Project) {
    this.selectedProject = project;
    this.imgPathProject = project.imgPath;
  }

  closeOverlay() {
    this.selectedProject = null;
    this.imgPathProject = '';
  }

  goToNextProject() {
    if (!this.projects?.length || !this.selectedProject) return;
    
    const currentIndex = this.projects.findIndex(p => p === this.selectedProject);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIndex];
  }
}
