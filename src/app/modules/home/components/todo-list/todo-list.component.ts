import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList>= [
    // {task:"Falar com saulo", checked: false},
    // {task:"Falar com edmundo", checked: false}
  ];

}
