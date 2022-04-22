import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyStatementComponent } from './dummy-statement.component';

describe('DummyStatementComponent', () => {
  let component: DummyStatementComponent;
  let fixture: ComponentFixture<DummyStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
