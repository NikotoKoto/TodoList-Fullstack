import { MatIconModule } from '@angular/material/icon';
import { Component, input, output } from '@angular/core';
import { Todo, TodoForm } from '../../../shared/interfaces';
import { NgIf } from '@angular/common';
import { TodoEdiyComponent } from './components/todo-ediy/todo-edit.component';
@Component({
  selector: 'app-todo',
  imports: [NgIf, MatIconModule, TodoEdiyComponent],
  template: `
    <li class="todo-items" *ngIf="todo() as t">
      <!-- *ngIf - S'assurer que si c'est undefined on affiche rien de cette todo -->
      <mat-icon (click)="isEdited = true" style="cursor:pointer">edit</mat-icon>
      <app-todo-edit
        (editedTodo)="onEdited($event)"
        [todo]="t"
        *ngIf="isEdited"
      />
      <div *ngIf="!isEdited">
        <span class="text-semibold"> {{ t.title }} </span>
        <input (click)="toggleTodo()" type="checkbox" [checked]="t.done" />
        <button (click)="deleteTodo.emit(t.id)" class="mx-10  btn btn-danger ">
          X
        </button>
      </div>
    </li>
  `,
  host: {},
  styles: `
  .todo-items{
    display: flex;
    width: 100%;
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
    }
  `,
})
export class TodoComponent {
  todo = input<Todo>();
  isEdited = false;
  editedTodo = output<Todo>();
  selectTodo = output<string>();
  updateTodo = output<Todo>();
  deleteTodo = output<string>();
  toggleTodo() {
    this.updateTodo.emit({ ...this.todo(), done: !this.todo()?.done } as Todo);
  }
  onEdited(edited: Todo) {
    this.editedTodo.emit(edited);
    this.isEdited = false;
  }
}
