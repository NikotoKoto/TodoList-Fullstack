import { TodosService } from './../../shared/services/todos.service';
import { Component, computed, inject, signal } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { Todo, TodoForm } from '../../shared/interfaces';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo-container',
  imports: [TodoFormComponent, TodosListComponent, JsonPipe],
  template: `
    <h1>Que dois je faire ?</h1>
    <app-todo-form (addTodo)="addTodo($event)" class="mt-20" />
    @if (todoIsLoading()) {
    <h2>En cours de chargement</h2>
    }@else {
    <app-todos-list
      (updateTodo)="updateTodo($event)"
      (selectTodo)="selectTodo($event)"
      (deleteTodo)="deleteTodo($event)"
      [todosList]="todoList()"
    />
    <pre> {{ selectedTodo() | json }}</pre>

    }
  `,
  styles: `
  :host{
    display:flex;
    flex-direction: column;
    align-items:center;
  }`,
})
export class TodoContainerComponent {
  TodosService = inject(TodosService);
  selectedTodo = this.TodosService.selectedTodoResource.value;
  todoIsLoading = this.TodosService.todoResource.isLoading;
  todoList = computed(() => (this.TodosService.todoResource.value() || []).filter(todo => !todo.done));
  addTodo(todo: TodoForm) {
    this.TodosService.addTodo(todo);
  }

  updateTodo(todo: Todo) {
    this.TodosService.updateTodo(todo);
  }
  selectTodo(todoId: string) {
    this.TodosService.selectTodoId(todoId);
  }
  deleteTodo(todoId: string) {
    this.TodosService.deleteTodo(todoId);
  }
}
