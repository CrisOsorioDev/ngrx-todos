import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCompletedTasksComponent } from './remove-completed-tasks.component';

describe('RemoveCompletedTasksComponent', () => {
  let component: RemoveCompletedTasksComponent;
  let fixture: ComponentFixture<RemoveCompletedTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveCompletedTasksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveCompletedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
