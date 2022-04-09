import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    `
      section {
        background-color: #c3b4c6;
        height: 5rem;
        border-radius: 1rem;
        padding: 0.8rem;
        margin: 0 0.3rem;
        display: flex;
        flex-direction: column;
      }
      h4,
      h2 {
        text-align: center;
        color: white;
        margin: 0;
        font-weight: normal;
        flex-grow: 2;
      }
    `,
  ],
})
export class CardComponent implements OnInit {
  color: string = 'black';
  @Input() header: string = '';
  @Input() body: string = '';
  constructor() {}

  ngOnInit(): void {}
}
