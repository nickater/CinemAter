import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTvShowComponent } from './delete-tv-show.component';

describe('DeleteTvShowComponent', () => {
  let component: DeleteTvShowComponent;
  let fixture: ComponentFixture<DeleteTvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTvShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
