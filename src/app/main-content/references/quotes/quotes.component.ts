import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Quote } from '../../../interfaces/quote';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuotesComponent {
quotes: Quote[] = [
  { 
    QuoteId: 1,
    Author : 'Björn',
    Quote: 'Robert contributed significantly to the success of our project by always meeting the set deadlines through his reliability and punctuality. His precise and careful way of working as well as his enthusiasm and willingness to learn were decisive for the quality of the results. In addition, he showed a high sense of responsibility and always worked independently, while at the same time supporting teamwork through his respectful and constructive cooperation. His interdisciplinary skills and commitment played a key role in the success of the project.'

  },
  { 
    QuoteId: 2,
    Author : 'Robert was always fully committed to our project. He completed his tasks very carefully and independently, demonstrating excellent time management. With his attention to detail, he ensured that nothing was overlooked. Even in stressful phases, he always remained positive and brought a good mood to the team. With his empathy and willingness to help, he was an important pillar of morale in the team. His great determination made a decisive contribution to the success of the project.',
    Quote: 'I am the best..Peter'

  },
  { 
    QuoteId: 3,
    Author : 'Rabia',
    Quote: 'Robert was a great team colleague who was a great addition to our team, both personally and professionally. His calm and analytical nature, coupled with his excellent problem-solving skills and his willingness to take on the most complex tasks, made him an indispensable asset to our project. Even outside of group work, he always had a sympathetic ear and was always available to solve colleagues problems. Particularly impressive was his attention to detail in order to create an error-free environment for the user. With his positive charisma and strong communication skills, the group project ran extremely smoothly and pleasantly at all times.'

  },
  { 
    QuoteId: 1,
    Author : 'Björn',
    Quote: 'Robert contributed significantly to the success of our project by always meeting the set deadlines through his reliability and punctuality. His precise and careful way of working as well as his enthusiasm and willingness to learn were decisive for the quality of the results. In addition, he showed a high sense of responsibility and always worked independently, while at the same time supporting teamwork through his respectful and constructive cooperation. His interdisciplinary skills and commitment played a key role in the success of the project.'

  },
  { 
    QuoteId: 2,
    Author : 'Robert was always fully committed to our project. He completed his tasks very carefully and independently, demonstrating excellent time management. With his attention to detail, he ensured that nothing was overlooked. Even in stressful phases, he always remained positive and brought a good mood to the team. With his empathy and willingness to help, he was an important pillar of morale in the team. His great determination made a decisive contribution to the success of the project.',
    Quote: 'I am the best..Peter'

  },
  { 
    QuoteId: 3,
    Author : 'Rabia',
    Quote: 'Robert was a great team colleague who was a great addition to our team, both personally and professionally. His calm and analytical nature, coupled with his excellent problem-solving skills and his willingness to take on the most complex tasks, made him an indispensable asset to our project. Even outside of group work, he always had a sympathetic ear and was always available to solve colleagues problems. Particularly impressive was his attention to detail in order to create an error-free environment for the user. With his positive charisma and strong communication skills, the group project ran extremely smoothly and pleasantly at all times.'

  }
]
}
