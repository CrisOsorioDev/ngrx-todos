import { CommonModule } from '@angular/common';
import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { ITask } from 'src/app/interfaces/task.interface';
import { markTaskAsCompleted, removeTask } from 'src/app/store/task.actions';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TaskComponent {
  store = inject(Store);
  @Input() task!: ITask;

  markAsCompleted(id: string): void {
    this.store.dispatch(markTaskAsCompleted({ id }));
  }

  removeTask(id: string): void {
    this.store.dispatch(removeTask({ id }));
  }
}
