import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTvShowsComponent } from './list-tv-shows.component';

describe('ListTvShowsComponent', () => {
  let component: ListTvShowsComponent;
  let fixture: ComponentFixture<ListTvShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTvShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
