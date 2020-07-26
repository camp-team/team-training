import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasingComponent } from './pasing.component';

describe('PasingComponent', () => {
  let component: PasingComponent;
  let fixture: ComponentFixture<PasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
