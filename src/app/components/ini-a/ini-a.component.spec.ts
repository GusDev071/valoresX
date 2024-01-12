import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniAComponent } from './ini-a.component';

describe('IniAComponent', () => {
  let component: IniAComponent;
  let fixture: ComponentFixture<IniAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
