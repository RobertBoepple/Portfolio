import { Component, OnInit } from '@angular/core';
import { Quote } from '../../../interfaces/quote';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
})
export class QuotesComponent implements OnInit {
  currentIndex:number = 0;
  translatedQuotes: Quote[] = [];
  
  quotes: Quote[] = [
    { 
      QuoteId: 1,
      Author : 'Björn',
      Quote: 'quotes.quote1',
      Title: 'Frontend Developer'
    },
    { 
      QuoteId: 2,
      Author :'Ingo',
      Quote: 'quotes.quote2',
      Title: 'Frontend Developer'
    },
    { 
      QuoteId: 3,
      Author : 'Rabia',
      Quote: 'quotes.quote3',
      Title: 'Frontend Developer'
    }
  ];

  constructor(private translate: TranslateService) {}
  
  ngOnInit() {
    this.updateTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }
  
  updateTranslations() {
    this.translatedQuotes = this.quotes.map(quote => {
      return {
        ...quote,
        Quote: this.translate.instant(quote.Quote)
      };
    });
  }

  getPrevIndex(): number {
    return (this.currentIndex - 1 + this.quotes.length) % this.quotes.length;
  }

  getNextIndex(): number {
    return (this.currentIndex + 1) % this.quotes.length;
  }

  next() {
    if (this.currentIndex < this.quotes.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.quotes.length - 1; 
    }
  }
  
  setActiveDot(index: number): void {
    this.currentIndex = index;
  }
}
