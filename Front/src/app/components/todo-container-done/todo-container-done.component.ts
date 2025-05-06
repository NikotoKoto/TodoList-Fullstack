import { TodosService } from './../../shared/services/todos.service';
import { Component, computed, inject } from '@angular/core';
import { TodoListDoneComponent } from "./components/todo-list-done/todo-list-done.component";
import { Todo } from '../../shared/interfaces';

@Component({
  selector: 'app-todo-container-done',
  imports: [TodoListDoneComponent],
  template: `
    <h1 class="mb-20"> Ce que j'ai déjà fait !  </h1>

    <app-todo-list-done  class="mt-20" [todosDone]="todosDone()" (deleteTodo)="deleteTodo($event)" (todoUpdate)="todoUpdate($event)"/>

    
  `,
  styles:`
  :host {
    display:flex;
    align-items:center;
    flex-direction:column;
  }`
})
export class TodoContainerDoneComponent {
todosService = inject(TodosService);
todosDone = computed(()=>(this.todosService.todoResource.value() ?? []).filter(todo => todo.done))

deleteTodo(todoId : string){
  this.todosService.deleteTodo(todoId)
}
todoUpdate(todo :Todo ){
this.todosService.updateTodo(todo)
}
}
