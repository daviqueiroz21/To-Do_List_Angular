import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList>= [
    {task:"Falar com saulo", checked: false},
    {task:"Falar com edmundo", checked: false}
  ];

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }


  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente Deletar tudo?");

    if(confirm){
      this.taskList = [];
    }
  }
}
