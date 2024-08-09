import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { resetAllTasks } from 'src/app/store/task.actions';

@Component({
  selector: 'app-reset-all-tasks',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './reset-all-tasks.component.html',
  styleUrl: './reset-all-tasks.component.scss',
})
export class ResetAllTasksComponent {
  store = inject(Store);

  resetTasks(): void {
    this.store.dispatch(resetAllTasks());
  }
}
