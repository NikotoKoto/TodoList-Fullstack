import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="flex-auto text-bold text-lg" >Todos</div>
    <ul class="xs-hide flex flex-row gap-16 ">
  
      <li>
        <a href="#"> Se connecter</a>
      </li>
    </ul>
  `,
  styles:`
  :host {
    display: flex;
    position:relative;
    flex-direction: row;
    align-items: center;
    background-color: var(--primary);
    color: var(--white);
    height: 56px;
    padding: 0 16px;

    a{
      color: var(--white);
    }
  }`
})
export class HeaderComponent {

}
