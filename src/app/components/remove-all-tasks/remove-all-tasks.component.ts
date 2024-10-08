import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { removeAllTasks } from 'src/app/store/task.actions';

@Component({
  selector: 'app-remove-all-tasks',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './remove-all-tasks.component.html',
  styleUrl: './remove-all-tasks.component.scss',
})
export class RemoveAllTasksComponent {
  store = inject(Store);

  removeAllTasks(): void {
    this.store.dispatch(removeAllTasks());
  }
}
