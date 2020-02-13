import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductTab } from './product.page';
import { PaymentModePipeModule, PaymentModePipe } from '../_pipes/payment-mode.pipe';
import { CurrencyPipe } from '@angular/common';

describe('ProductTab', () => {
  let component: ProductTab;
  let fixture: ComponentFixture<ProductTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTab],
      imports: [IonicModule.forRoot(), PaymentModePipeModule],
      providers: [PaymentModePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
