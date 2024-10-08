import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAllTasksComponent } from './remove-all-tasks.component';
import { provideStore } from '@ngrx/store';

describe('RemoveAllTasksComponent', () => {
  let component: RemoveAllTasksComponent;
  let fixture: ComponentFixture<RemoveAllTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveAllTasksComponent],
      providers: [provideStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveAllTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
