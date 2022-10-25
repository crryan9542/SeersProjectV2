import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpropheciesComponent } from './adminprophecies.component';

describe('AdminpropheciesComponent', () => {
  let component: AdminpropheciesComponent;
  let fixture: ComponentFixture<AdminpropheciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpropheciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpropheciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
