import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-remove-all-tasks',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './remove-all-tasks.component.html',
  styleUrl: './remove-all-tasks.component.scss',
})
export class RemoveAllTasksComponent {}
