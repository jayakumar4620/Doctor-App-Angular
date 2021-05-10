import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateslotComponent } from './createslot.component';

describe('CreateslotComponent', () => {
  let component: CreateslotComponent;
  let fixture: ComponentFixture<CreateslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
