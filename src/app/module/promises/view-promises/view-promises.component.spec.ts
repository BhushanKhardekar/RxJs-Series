import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPromisesComponent } from './view-promises.component';

describe('ViewPromisesComponent', () => {
  let component: ViewPromisesComponent;
  let fixture: ComponentFixture<ViewPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPromisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
