import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { removeCompletedTasks } from 'src/app/store/task.actions';

@Component({
  selector: 'app-remove-completed-tasks',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './remove-completed-tasks.component.html',
  styleUrl: './remove-completed-tasks.component.scss',
})
export class RemoveCompletedTasksComponent {
  store = inject(Store);

  removeCompletedTasks(): void {
    this.store.dispatch(removeCompletedTasks());
  }
}
