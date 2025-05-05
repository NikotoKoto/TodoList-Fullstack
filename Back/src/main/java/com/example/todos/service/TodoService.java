package com.example.todos.service;

import com.example.todos.Todo;
import com.example.todos.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getTodos(){
        return todoRepository.findAll();
    }

    public Todo createTodo(Todo todo){
        return todoRepository.save(todo);
    }

    public Todo updateTodo(Long id, Todo updatedTodo){
        return todoRepository.findById(id).map(todo -> {
            todo.setTitle(updatedTodo.getTitle());
            todo.setDone(updatedTodo.isDone());
            return todoRepository.save(todo);
        }).orElse(null);
    }

    public void deleteTodo(Long id){
        todoRepository.deleteById(id);
    }

    public Todo getTodoById(Long id) {
        return todoRepository.findById(id).orElse(null);
    }
}
