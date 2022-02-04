import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConseillerComponent } from './update-conseiller.component';

describe('UpdateConseillerComponent', () => {
  let component: UpdateConseillerComponent;
  let fixture: ComponentFixture<UpdateConseillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConseillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
