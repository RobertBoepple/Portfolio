import { Component, inject } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  translate = inject(TranslationService);
}
