import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildfireTableComponent } from './wildfire-table.component';

describe('WildfireTableComponent', () => {
  let component: WildfireTableComponent;
  let fixture: ComponentFixture<WildfireTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WildfireTableComponent]
    });
    fixture = TestBed.createComponent(WildfireTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
