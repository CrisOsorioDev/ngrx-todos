import { Component, inject, ViewEncapsulation } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CommonModule } from '@angular/common';
import { ResetAllTasksComponent } from '../reset-all-tasks/reset-all-tasks.component';
import { RemoveCompletedTasksComponent } from '../remove-completed-tasks/remove-completed-tasks.component';
import { TaskComponent } from '../task/task.component';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { selectTaks } from 'src/app/store/task.selectors';
import { RemoveAllTasksComponent } from '../remove-all-tasks/remove-all-tasks.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    AddTaskComponent,
    ResetAllTasksComponent,
    RemoveCompletedTasksComponent,
    RemoveAllTasksComponent,
    TaskComponent,
    MatCardModule,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BoardComponent {
  store = inject(Store);
  tasks = this.store.selectSignal(selectTaks);
}
