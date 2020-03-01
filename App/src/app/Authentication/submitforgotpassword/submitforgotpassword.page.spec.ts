import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmitforgotpasswordPage } from './submitforgotpassword.page';

describe('SubmitforgotpasswordPage', () => {
  let component: SubmitforgotpasswordPage;
  let fixture: ComponentFixture<SubmitforgotpasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitforgotpasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitforgotpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
