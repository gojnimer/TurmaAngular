import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCursosComponent } from './get-cursos.component';

describe('GetCursosComponent', () => {
  let component: GetCursosComponent;
  let fixture: ComponentFixture<GetCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
