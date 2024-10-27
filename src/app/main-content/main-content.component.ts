import { Component } from '@angular/core';
import {AboveTheFoldComponent} from './above-the-fold/above-the-fold.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from '../shared/components/header/header.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldComponent, FooterComponent, AboutmeComponent, MyskillsComponent, PortfolioComponent, ContactComponent, HeaderComponent, ReferencesComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
