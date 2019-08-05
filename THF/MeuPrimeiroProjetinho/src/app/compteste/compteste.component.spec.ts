import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesteComponent } from './compteste.component';

describe('ComptesteComponent', () => {
  let component: ComptesteComponent;
  let fixture: ComponentFixture<ComptesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
