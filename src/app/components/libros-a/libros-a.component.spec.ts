import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosAComponent } from './libros-a.component';

describe('LibrosAComponent', () => {
  let component: LibrosAComponent;
  let fixture: ComponentFixture<LibrosAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
