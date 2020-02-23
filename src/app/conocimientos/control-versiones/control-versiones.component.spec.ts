import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlVersionesComponent } from './control-versiones.component';

describe('ControlVersionesComponent', () => {
  let component: ControlVersionesComponent;
  let fixture: ComponentFixture<ControlVersionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlVersionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlVersionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
