import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartTab } from './cart.page';
import { PaymentModePipeModule } from '../_pipes/payment-mode.pipe';
import { CurrencyPipe } from '@angular/common';
import { NgRedux } from '@angular-redux/store';
import { AppActions } from '../app.action';

describe('CartTab', () => {
  let component: CartTab;
  let fixture: ComponentFixture<CartTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartTab],
      imports: [IonicModule.forRoot(), PaymentModePipeModule],
      providers: [NgRedux, AppActions],
    }).compileComponents();

    fixture = TestBed.createComponent(CartTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
