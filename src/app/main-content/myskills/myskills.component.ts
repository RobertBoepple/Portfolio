import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {
  mind: boolean = false;

  translate = inject(TranslationService);

  hover(movement: string) {
    if (movement == 'in') {
      this.mind = true;
      console.log('hovered in');
    } else {
      this.mind = false;
    }
  }
}
