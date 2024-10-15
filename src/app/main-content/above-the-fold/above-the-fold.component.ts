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
  banners: string[]=[
    'banner-content.1',
    'banner-content.2',
    'banner-content.3',
    'banner-content.4',
    'banner-content.5',
    'banner-content.6',
  ]

  
}

