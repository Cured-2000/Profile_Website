import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirComponent } from './expir.component';

describe('ExpirComponent', () => {
  let component: ExpirComponent;
  let fixture: ComponentFixture<ExpirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
