import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompteBComponent } from './detail-compte-b.component';

describe('DetailCompteBComponent', () => {
  let component: DetailCompteBComponent;
  let fixture: ComponentFixture<DetailCompteBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCompteBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCompteBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
