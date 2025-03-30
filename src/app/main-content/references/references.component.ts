import { Component, inject } from '@angular/core';
import { QuotesComponent } from './quotes/quotes.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [QuotesComponent, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  translate = inject(TranslationService);
}
