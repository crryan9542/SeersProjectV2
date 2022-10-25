import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProphecySearchComponent } from './prophecy-search.component';

describe('ProphecySearchComponent', () => {
  let component: ProphecySearchComponent;
  let fixture: ComponentFixture<ProphecySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProphecySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProphecySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
