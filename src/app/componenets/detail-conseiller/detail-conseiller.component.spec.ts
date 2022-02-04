import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConseillerComponent } from './detail-conseiller.component';

describe('DetailConseillerComponent', () => {
  let component: DetailConseillerComponent;
  let fixture: ComponentFixture<DetailConseillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailConseillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
