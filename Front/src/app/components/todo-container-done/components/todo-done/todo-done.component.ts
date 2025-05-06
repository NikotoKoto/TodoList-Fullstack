
import { Component, input, output } from '@angular/core';
import { Todo } from '../../../../shared/interfaces';
import { MatIconModule} from "@angular/material/icon"
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-done',
  imports: [MatIconModule, NgIf],
  template: `
    <li *ngIf="todosDone() as t" class="todo-item">
    <mat-icon (click)="goBack()" style="cursor:pointer;">arrow_back</mat-icon>

      <span>{{t.title}}</span>
      <button  class="btn btn-danger " (click)="deleteTodo.emit(t.id)">X</button>
    </li>
  `,
  styles:`
    .todo-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 0;
    }

    .todo-item span {
      text-decoration: line-through;
      flex: 1;
    }

    .todo-item mat-icon {
      cursor: pointer;
    }

    .todo-item button {
      padding: 4px 8px;
      font-size: 14px;
    }`
})
export class TodoDoneComponent {
todosDone = input<Todo>();
deleteTodo = output <string>();
todoUpdate = output<Todo>();
goBack(){
this.todoUpdate.emit({...this.todosDone(), done : !this.todosDone()?.done} as Todo)
}
}
