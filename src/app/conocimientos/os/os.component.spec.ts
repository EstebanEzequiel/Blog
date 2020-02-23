import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSComponent } from './os.component';

describe('OSComponent', () => {
  let component: OSComponent;
  let fixture: ComponentFixture<OSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
