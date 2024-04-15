import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TaskComponent {}
