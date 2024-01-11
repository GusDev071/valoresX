import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioseComponent } from './iniciose.component';

describe('InicioseComponent', () => {
  let component: InicioseComponent;
  let fixture: ComponentFixture<InicioseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
