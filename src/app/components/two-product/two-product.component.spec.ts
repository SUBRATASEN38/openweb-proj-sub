import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoProductComponent } from './two-product.component';

describe('TwoProductComponent', () => {
  let component: TwoProductComponent;
  let fixture: ComponentFixture<TwoProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
