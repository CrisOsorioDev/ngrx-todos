import { Component, ViewEncapsulation } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CommonModule } from '@angular/common';
import { RemoveAllTasksComponent } from '../remove-all-tasks/remove-all-tasks.component';
import { RemoveCompletedTasksComponent } from '../remove-completed-tasks/remove-completed-tasks.component';
import { TaskComponent } from '../task/task.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    AddTaskComponent,
    RemoveAllTasksComponent,
    RemoveCompletedTasksComponent,
    TaskComponent,
    MatCardModule,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BoardComponent {}
