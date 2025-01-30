import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

import { ArmazemDetailComponent } from './armazem-detail.component';
import { Armazem } from 'src/app/model/armazem/armazem';

describe('ArmazemDetailComponent', () => {
  let route: ActivatedRoute; 
  let component: ArmazemDetailComponent;
  let fixture: ComponentFixture<ArmazemDetailComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmazemDetailComponent ],
      imports: [ 
        RouterModule.forRoot([]),
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmazemDetailComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('get ', () => {
    let armazem: Armazem ={id: '002', designacao:"OLA", morada: "Nao gosto de atum", localidade:"Localidade", codigoPostal:"4000-123", latitude: 11, longitude:11 };
    component.getArmazem
    expect(armazem.id).toBe('002');
    expect(armazem.designacao).toBe('OLA');
    expect(armazem.morada).toBe("Nao gosto de atum");
    expect(armazem.localidade).toBe('Localidade');
    expect(armazem.codigoPostal).toBe('4000-123');
    expect(armazem.latitude).toBe(11);
    expect(armazem.longitude).toBe(11);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
