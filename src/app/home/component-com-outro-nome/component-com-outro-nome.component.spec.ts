import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComOutroNomeComponent } from './component-com-outro-nome.component';

describe('ComponentComOutroNomeComponent', () => {
  let component: ComponentComOutroNomeComponent;
  let fixture: ComponentFixture<ComponentComOutroNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentComOutroNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentComOutroNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
