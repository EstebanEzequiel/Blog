import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestagnaComponent } from './pestagna.component';

describe('PestagnaComponent', () => {
  let component: PestagnaComponent;
  let fixture: ComponentFixture<PestagnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestagnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestagnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
