import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaAComponent } from './ayuda-a.component';

describe('AyudaAComponent', () => {
  let component: AyudaAComponent;
  let fixture: ComponentFixture<AyudaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
