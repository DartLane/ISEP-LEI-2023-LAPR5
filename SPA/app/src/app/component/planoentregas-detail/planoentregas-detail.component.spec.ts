import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoentregasDetailComponent } from './planoentregas-detail.component';

describe('PlanoentregasDetailComponent', () => {
  let component: PlanoentregasDetailComponent;
  let fixture: ComponentFixture<PlanoentregasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoentregasDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoentregasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
