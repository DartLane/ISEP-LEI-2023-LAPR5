import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneamentoComponent } from './planeamento.component';

describe('PlaneamentoComponent', () => {
  let component: PlaneamentoComponent;
  let fixture: ComponentFixture<PlaneamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
