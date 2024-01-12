import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActAComponent } from './act-a.component';

describe('ActAComponent', () => {
  let component: ActAComponent;
  let fixture: ComponentFixture<ActAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
