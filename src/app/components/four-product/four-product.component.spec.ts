import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourProductComponent } from './four-product.component';

describe('FourProductComponent', () => {
  let component: FourProductComponent;
  let fixture: ComponentFixture<FourProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
