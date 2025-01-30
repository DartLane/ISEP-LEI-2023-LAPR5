import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanemanetoFrotaComponent } from './planemaneto-frota.component';

describe('PlanemanetoFrotaComponent', () => {
  let component: PlanemanetoFrotaComponent;
  let fixture: ComponentFixture<PlanemanetoFrotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanemanetoFrotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanemanetoFrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
