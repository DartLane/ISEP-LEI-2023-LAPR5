import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

import { CaminhoDetailComponent } from './caminho-detail.component';
import Caminho from 'src/app/model/caminho/caminho';
import { DebugElement } from '@angular/core';

describe('CaminhoDetailComponent', () => {
  let route: ActivatedRoute; 
  let component: CaminhoDetailComponent;
  let fixture: ComponentFixture<CaminhoDetailComponent>;

  let energiaNecessaria: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminhoDetailComponent ],
      imports: [ 
        RouterModule.forRoot([]),
        HttpClientTestingModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminhoDetailComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
  it('get ', () => {
    let caminho: Caminho ={id:'1',energiaNecessariaKWh: 40, tempoDeslocacaoMin: 20, idArmazemOrigem: 'zz1', idArmazemDestino: 'zz3', distanciaEntreArmazens: 20 };
    component.getCaminho
    expect(caminho.id).toBe('1');
    expect(caminho.energiaNecessariaKWh).toBe(40);
    expect(caminho.tempoDeslocacaoMin).toBe(20);
    expect(caminho.idArmazemOrigem).toBe('zz1');
    expect(caminho.idArmazemDestino).toBe('zz3');
    expect(caminho.distanciaEntreArmazens).toBe(20);
  });


});


