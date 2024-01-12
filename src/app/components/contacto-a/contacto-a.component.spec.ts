import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoAComponent } from './contacto-a.component';

describe('ContactoAComponent', () => {
  let component: ContactoAComponent;
  let fixture: ComponentFixture<ContactoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
