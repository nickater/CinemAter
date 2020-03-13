import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTvShowComponent } from './create-tv-show.component';

describe('CreateTvShowComponent', () => {
  let component: CreateTvShowComponent;
  let fixture: ComponentFixture<CreateTvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTvShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
