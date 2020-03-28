import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotpasswordPage } from './forgotpassword.page';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

describe('ForgotpasswordPage', () => {
  let component: ForgotpasswordPage;
  let fixture: ComponentFixture<ForgotpasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpasswordPage ],
      imports: [FormsModule, IonicModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
