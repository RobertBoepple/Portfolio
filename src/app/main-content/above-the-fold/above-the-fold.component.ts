import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  translate = inject(TranslationService);

  constructor(private translationService: TranslationService) {}

  toggleLanguage(event: any): void {
    const language = event.target.checked ? 'de' : 'en';
    this.translationService.switchLanguage(language);
  }
}

