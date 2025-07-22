import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      this.translate.use(savedLanguage);
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  public getCurrentLanguage(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'en';
  }
}
