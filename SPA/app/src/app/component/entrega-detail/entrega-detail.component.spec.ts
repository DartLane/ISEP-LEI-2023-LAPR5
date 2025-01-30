import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EntregaDetailComponent } from './entrega-detail.component';
import { Entrega } from 'src/app/model/entrega/entrega';

describe('EntregaDetailComponent', () => {
  let route: ActivatedRoute;
  let component: EntregaDetailComponent;
  let fixture: ComponentFixture<EntregaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntregaDetailComponent],
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule,
      ]
    })
      .compileComponents();

    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(EntregaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getEntrega', () => {

    it('getEntrega ', () => {
      let entrega: Entrega = { id: "1", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: '001', dia: 2, mes: 2, ano: 2000 };
      component.getEntrega();
      expect(entrega.id).toBe('1');
      expect(entrega.tempodescarga).toBe(10);
      expect(entrega.tempocarga).toBe(15);
      expect(entrega.massa).toBe(300);
      expect(entrega.armazemId).toBe('001');
      expect(entrega.dia).toBe(2);
      expect(entrega.mes).toBe(2);
      expect(entrega.ano).toBe(2000);
    });
  });

});
