import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: string;
  name: string;
  techStack: { name: string }[];
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
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Firebase' },
      ],
      description:
        'Ein Kanban-Board Projekt für Aufgabenverwaltung und Teamkollaboration.',
      githubLink: 'https://github.com/IhrGithubLink/Join',
      liveLink: 'https://IhreLiveDemoURL/Join',
      imgPath: 'assets/img/join.jpg',
      index: 0,
    },
    {
      id: '02',
      name: 'El Pollo Loco',
      techStack: [{ name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' }],
      description: 'Ein JavaScript-basiertes Jump-and-Run Spiel.',
      githubLink: 'https://github.com/IhrGithubLink/ElPolloLoco',
      liveLink: 'https://IhreLiveDemoURL/ElPolloLoco',
      imgPath: 'assets/img/El Pollo Loco.png',
      index: 1,
    },
    {
      id: '03',
      name: 'Pokédex',
      techStack: [
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Rest-Api' },
      ],
      description: 'Eine Pokémon-Enzyklopädie mit Daten aus der PokéAPI.',
      githubLink: 'https://github.com/IhrGithubLink/Pokedex',
      liveLink: 'https://IhreLiveDemoURL/Pokedex',
      imgPath: 'assets/img/Pokedex.png',
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
    console.log('Hover Index:', index);
    const project = this.projects[index];
    if (project) {
      console.log('Project found:', project);
      console.log('Image path:', project.imgPath);
      this.imgPathProject = project.imgPath;
    }
  }

  openProjectDetails(project: Project) {
    console.log('Opening project:', project);
    this.selectedProject = project;
    this.imgPathProject = project.imgPath;
    console.log('Set image path to:', this.imgPathProject);
  }

  closeOverlay() {
    this.selectedProject = null;
    this.imgPathProject = '';
  }
}
