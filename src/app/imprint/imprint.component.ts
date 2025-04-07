import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
translate = inject(TranslationService);
}
