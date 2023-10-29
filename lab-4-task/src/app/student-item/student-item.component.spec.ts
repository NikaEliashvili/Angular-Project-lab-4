import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentItemComponent } from './student-item.component';

describe('StudentItemComponent', () => {
  let component: StudentItemComponent;
  let fixture: ComponentFixture<StudentItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentItemComponent]
    });
    fixture = TestBed.createComponent(StudentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
