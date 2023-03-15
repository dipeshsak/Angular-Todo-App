import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {Todo} from './../../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit():void {
    this.todoService.getTodos().subscribe(todos=>{
      this.todos=todos
      console.log("ALL TODOS",this.todos)
    })
  }

  changeTodoStatus(todo:Todo){
    this.todoService.changeStatus(todo)
  }

  deleteTodo(todo:Todo){
    console.log("TODO DELETE",todo)
    this.todoService.deleteTodo(todo)
  }

}
