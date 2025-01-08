import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineAdvertisingComponent } from './online-advertising.component';

describe('OnlineAdvertisingComponent', () => {
  let component: OnlineAdvertisingComponent;
  let fixture: ComponentFixture<OnlineAdvertisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineAdvertisingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
