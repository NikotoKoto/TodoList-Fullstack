import { Component, input, output } from '@angular/core';
import { Todo } from '../../shared/interfaces';
import { NgIf } from '@angular/common';
@Component({
    selector: 'app-todo',
    imports: [NgIf],
    template: `
     <li class="todo-items" *ngIf="todo() as t"
     >
     <!-- *ngIf - S'assurer que si c'est undefined on affiche rien de cette todo -->
        <span (click)="selectTodo.emit(t.id)">{{todo()?.title}}</span>
        <input (click)="toggleTodo()" type="checkbox" [checked]='todo()?.done'/>
        <button (click)="deleteTodo.emit(t.id)" class="  btn btn-danger ">X</button>
      </li>
  `,
    host: {},
    styles: `
  .todo-items{
    display: flex;
      align-items: center;
      gap: 12px; /* Espace entre les éléments */
      padding: 8px 0;
    }

    .todo-item span {
      text-decoration: line-through;
      flex: 1; /* Pour pousser le bouton à droite si besoin */
    }

    .todo-item mat-icon {
      cursor: pointer;
    }

    .todo-item button {
      padding: 4px 8px;
      font-size: 14px;
    }
  }`
})
export class TodoComponent {
  todo = input<Todo>();
  selectTodo = output<string>();
  updateTodo = output<Todo>();
  deleteTodo = output<string>();
  toggleTodo(){
    this.updateTodo.emit({...this.todo(), done : !this.todo()?.done} as Todo)
  }
}
