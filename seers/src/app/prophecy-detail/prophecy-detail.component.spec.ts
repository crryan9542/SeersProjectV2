import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProphecyDetailComponent } from './prophecy-detail.component';

describe('ProphecyDetailComponent', () => {
  let component: ProphecyDetailComponent;
  let fixture: ComponentFixture<ProphecyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProphecyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProphecyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
