import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
  <p class="text-sm text-semibold">© 2025 TodoList. Tous droits réservés.</p>
  `,
    styles: `
  :host{
    display:flex;
    justify-content: center;
    align-items: center;
    background-color : var(--dark-grey);
    color: var(--white);
    height: 100px;
  }
  `
})
export class FooterComponent {

}
