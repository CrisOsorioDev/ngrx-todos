import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-remove-completed-tasks',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './remove-completed-tasks.component.html',
  styleUrl: './remove-completed-tasks.component.scss',
})
export class RemoveCompletedTasksComponent {}
