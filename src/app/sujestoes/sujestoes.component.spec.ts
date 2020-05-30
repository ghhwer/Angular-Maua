import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SujestoesComponent } from './sujestoes.component';

describe('SujestoesComponent', () => {
  let component: SujestoesComponent;
  let fixture: ComponentFixture<SujestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SujestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SujestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
