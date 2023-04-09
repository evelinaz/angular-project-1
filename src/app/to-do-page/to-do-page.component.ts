import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.css'],
})
export class ToDoPageComponent {
  task = '';
  taskList = ['task1', 'task2', 'task3'];

  addTaskButtonClick() {
    this.taskList.push(this.task);
  }

  removeTaskButtonClick(asiMidaEemaldada: string) {
    // console.log(asiMidaEemaldada);

    this.taskList = this.taskList.filter((asi2) => {
      if (asiMidaEemaldada === asi2) {
        return false;
      } else {
        return true;
      }
    });
  }
}
