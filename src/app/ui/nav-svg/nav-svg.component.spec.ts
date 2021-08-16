import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSvgComponent } from './nav-svg.component';

describe('NavSvgComponent', () => {
  let component: NavSvgComponent;
  let fixture: ComponentFixture<NavSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
