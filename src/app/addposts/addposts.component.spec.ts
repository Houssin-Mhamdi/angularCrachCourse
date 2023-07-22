import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostsComponent } from './addposts.component';

describe('AddpostsComponent', () => {
  let component: AddpostsComponent;
  let fixture: ComponentFixture<AddpostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpostsComponent]
    });
    fixture = TestBed.createComponent(AddpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
