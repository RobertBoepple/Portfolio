import { Component } from '@angular/core';
import {AboveTheFoldComponent} from './above-the-fold/above-the-fold.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, AboveTheFoldComponent, FooterComponent, AboutmeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
