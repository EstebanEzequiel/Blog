import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreEncabezadoComponent } from './pre-encabezado.component';

describe('PreEncabezadoComponent', () => {
  let component: PreEncabezadoComponent;
  let fixture: ComponentFixture<PreEncabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreEncabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
