import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRegistrationComponent } from './movie-registration.component';

describe('MovieRegistrationComponent', () => {
  let component: MovieRegistrationComponent;
  let fixture: ComponentFixture<MovieRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
