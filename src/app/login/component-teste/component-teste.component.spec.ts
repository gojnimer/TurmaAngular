import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTesteComponent } from './component-teste.component';

describe('ComponentTesteComponent', () => {
  let component: ComponentTesteComponent;
  let fixture: ComponentFixture<ComponentTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
