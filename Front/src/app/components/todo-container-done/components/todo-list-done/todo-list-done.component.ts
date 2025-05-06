import { Component, input, output } from '@angular/core';
import { Todo } from '../../../../shared/interfaces';
import { TodoDoneComponent } from "../todo-done/todo-done.component";

@Component({
  selector: 'app-todo-list-done',
  imports: [TodoDoneComponent],
  template: `
    <ul class=" flex flex-col gap-12">
      @for(todo of todosDone(); track todo.id){
        <app-todo-done [todosDone]="todo" (todoUpdate)="todoUpdate.emit($event)" (deleteTodo)="deleteTodo.emit($event)" />
      }
    </ul>
  `,
  styles:`
  `
})
export class TodoListDoneComponent {
todosDone= input<Todo[]>([]);
deleteTodo = output<string>();
todoUpdate = output<Todo>();
}
