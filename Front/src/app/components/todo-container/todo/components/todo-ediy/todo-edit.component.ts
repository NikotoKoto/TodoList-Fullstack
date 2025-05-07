import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo, TodoForm } from '../../../../../shared/interfaces';

@Component({
  selector: 'app-todo-edit',
  imports: [FormsModule],
  template: `
    <input
      type="text"
      [(ngModel)]="editTodo"
      class="flex-auto"
      [placeholder]="todo()?.title"
    />
    <button (click)="editTodoInput()" class="btn btn-primary">Ajouter</button>
  `,
  styles: `
  :host{
      display: flex;
      width: 50%;
    gap: 20px;
    padding: 16px
  }
  
  input{
    border-radius: 4px;
    border: 1px solid var(--light-grey)
  }`,
})
export class TodoEdiyComponent {
  editTodo = '';
  todo = input<Todo>();
  editedTodo = output<Todo>();
  editTodoInput() {
    if (this.editTodo) {
      const editTodo: Todo = {
        id: this.todo()?.id ?? '',
        title: this.editTodo,
        done: this.todo()?.done ?? false,
      };
      this.editTodo = '';
      this.editedTodo.emit(editTodo);
    }
  }
}
