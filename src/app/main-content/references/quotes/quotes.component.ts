import { Component } from '@angular/core';
import { Quote } from '../../../interfaces/quote';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss'
})
export class QuotesComponent {
quotes: Quote[] = [
  { 
    QuoteId: 1,
    Author : 'Hans',
    Quote: 'I am the best..Hans'

  },
  { 
    QuoteId: 1,
    Author : 'Peter',
    Quote: 'I am the best..Peter'

  },
  { 
    QuoteId: 1,
    Author : 'Susi',
    Quote: 'I am the best..Susi'

  }
]
}
