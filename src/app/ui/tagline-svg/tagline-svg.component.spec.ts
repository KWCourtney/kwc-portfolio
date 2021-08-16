import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglineSvgComponent } from './tagline-svg.component';

describe('TaglineSvgComponent', () => {
  let component: TaglineSvgComponent;
  let fixture: ComponentFixture<TaglineSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaglineSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglineSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
