import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateMovieComponent } from './admin-create-movie.component';

describe('AdminCreateMovieComponent', () => {
  let component: AdminCreateMovieComponent;
  let fixture: ComponentFixture<AdminCreateMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
