import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompteEpargneComponent } from './add-compte-epargne.component';

describe('AddCompteEpargneComponent', () => {
  let component: AddCompteEpargneComponent;
  let fixture: ComponentFixture<AddCompteEpargneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompteEpargneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompteEpargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
