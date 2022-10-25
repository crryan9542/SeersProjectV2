import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropheciesComponent } from './prophecies.component';

describe('PropheciesComponent', () => {
  let component: PropheciesComponent;
  let fixture: ComponentFixture<PropheciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropheciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropheciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
