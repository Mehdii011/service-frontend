import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompteEpargneComponent } from './update-compte-epargne.component';

describe('UpdateCompteEpargneComponent', () => {
  let component: UpdateCompteEpargneComponent;
  let fixture: ComponentFixture<UpdateCompteEpargneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompteEpargneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompteEpargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
