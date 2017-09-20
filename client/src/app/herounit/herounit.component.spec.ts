import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerounitComponent } from './herounit.component';

describe('HerounitComponent', () => {
  let component: HerounitComponent;
  let fixture: ComponentFixture<HerounitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerounitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerounitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
