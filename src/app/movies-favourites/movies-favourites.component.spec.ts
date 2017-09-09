import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFavouritesComponent } from './movies-favourites.component';

describe('MoviesFavouritesComponent', () => {
  let component: MoviesFavouritesComponent;
  let fixture: ComponentFixture<MoviesFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
