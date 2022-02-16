import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIdConseillerComponent } from './client-id-conseiller.component';

describe('ClientIdConseillerComponent', () => {
  let component: ClientIdConseillerComponent;
  let fixture: ComponentFixture<ClientIdConseillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientIdConseillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientIdConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
