import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePagComponent } from './pie-pag.component';

describe('PiePagComponent', () => {
  let component: PiePagComponent;
  let fixture: ComponentFixture<PiePagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiePagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiePagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
