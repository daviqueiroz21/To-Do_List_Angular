import { Component, DoCheck } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{
  ngDoCheck(): void {
    this.taskList.sort((first, last)=> Number(first.checked) - Number(last.checked));
  }

  public taskList: Array<TaskList>= [
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

  public validationInput(event: string, index: number): void {
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja Deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }
}
