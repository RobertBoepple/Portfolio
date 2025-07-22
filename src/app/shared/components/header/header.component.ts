import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
  isGerman = false;

  constructor(private translationService: TranslationService) {
    const storedMenuState = localStorage.getItem('menuOpen');
    this.isMenuOpen = storedMenuState === 'true';

    const currentLang = this.translationService.getCurrentLanguage();
    this.isGerman = currentLang === 'de';
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    localStorage.setItem('menuOpen', String(this.isMenuOpen));
  }

  toggleLanguage(event: any): void {
    const isChecked = event.target.checked;
    this.isGerman = isChecked;
    const language = isChecked ? 'de' : 'en';
    this.translationService.switchLanguage(language);
  }
}


