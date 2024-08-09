import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAllTasksComponent } from './reset-all-tasks.component';
import { provideStore } from '@ngrx/store';

describe('ResetAllTasksComponent', () => {
  let component: ResetAllTasksComponent;
  let fixture: ComponentFixture<ResetAllTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetAllTasksComponent],
      providers: [provideStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetAllTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
