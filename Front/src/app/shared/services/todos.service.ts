
import { Injectable, signal, resource, computed } from '@angular/core';
import { Todo, TodoForm} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
BASE_URL = "http://localhost:8080/todos"

todoResource  = resource({
  loader: async (): Promise<Todo[]> => (await fetch(this.BASE_URL)).json(),
})
selectedTodoId = signal<string | null>(null);


selectedTodoResource =  resource ({
  request : this.selectedTodoId,
  loader: async ( {request} ): Promise<Todo | undefined> =>{
    console.log("🧪 ID reçu dans loader:", request);
    if (request){
      return (await fetch(`${this.BASE_URL}/${request}`)).json();
    }else{
      return;
    }
  } 
})

selectTodoId(todoId : string){
  this.selectedTodoId.set(todoId);
  console.log(this.selectedTodoId())

}





  async addTodo(todo : TodoForm){
    try {
      const response =  await fetch(this.BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          
        },
        body : JSON.stringify(todo)
      })
       if(response.ok){
        const data = await response.json();
        this.todoResource.update(todos => todos ? [...todos, data] : data)
        console.log({data})
       }else {
        throw new Error('Oops');
       }
    }
    catch(e){
      throw new Error('Oops');
    };
   
  }
  async updateTodo(todo : Todo){
    try {
      const { id, ...restTodos} = todo;
      const response =  await fetch(`${this.BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type' : 'application/json',
          
        },
        body : JSON.stringify(restTodos)
      })
      const data = await response.json()
       if(response.ok){
        console.log({data})
        this.todoResource.update(todos => todos?.map(t=> t.id === (data as Todo).id ? data : t))
        this.selectedTodoResource.reload();
       }else {
        throw new Error('Oops');
       }
    }
    catch(e){
      throw new Error('Oops');
    };
   
  }

  async deleteTodo(todoId : String){
    try {
      const response = await fetch(`${this.BASE_URL}/${todoId}`,{
        method: 'DELETE',

      }) 
      if(response.ok){
        this.todoResource.update((todos) => todos?.filter((t)=> t.id !== todoId));

        if(this.selectedTodoId() === todoId){
          this.selectedTodoId.set(null);
        }
      }
    }catch{

    }
    
  }

  async editTodo(editTodo : Todo){
      try{
        const {id, ...restEditTodo} = editTodo;
        const response = await fetch(`${this.BASE_URL}/${id}`,{
          method : 'PATCH',
          headers : {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(restEditTodo)
        })
        if(response.ok){
          const data = await response.json();
          this.todoResource.update((todos) => todos?.map(t => t.id === (data as Todo).id ? data : t ))
        }else {
          throw new Error('oops');
        }
      }catch(e){
        throw new Error('oops');
      }
  }
  

  constructor() {

   }
}
