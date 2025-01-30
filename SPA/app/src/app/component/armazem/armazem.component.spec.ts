import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmazemComponent } from './armazem.component';

describe('ArmazemComponent', () => {
  let component: ArmazemComponent;
  let fixture: ComponentFixture<ArmazemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmazemComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmazemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#add',()=> {
  
    it('criar caminho OK',() => {
      component.add('002',"OLA", "Nao gosto de atum","Localidade","4000-123",10,10);
      expect(component).toBeTruthy();
    });

    it('criar armazem erro id null',() => {
      const msg = 'Obrigatório campo Id!';
      let spy = spyOn(window, 'alert')
      
      component.add('',"OLA", "Nao gosto de atum","Localidade","4000-123",10,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar caminho erro designação null',() => {
      const msg = 'Obrigatório campo Designação!';
      let spy = spyOn(window, 'alert')
      
      component.add('002','', "Nao gosto de atum","Localidade","4000-123",10,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro designação',() => {
      const msg = 'Obrigatório campo Morada!';
      let spy = spyOn(window, 'alert')
      
      component.add('002',"OLA",'',"Localidade","4000-123",10,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro localidade null',() => {
      const msg = 'Obrigatório campo Localidade!';
      let spy = spyOn(window, 'alert')
      
      component.add('002',"OLA",'Nao gosto de atum','',"4000-123",10,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro codigo Postal null',() => {
      const msg = 'Obrigatório campo Código Postal!';
      let spy = spyOn(window, 'alert')
      
      component.add('002',"OLA",'Nao gosto de atum','Localidade',"",10,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro id lenght >3',() => {
      const msg = 'ID necessita 3 caracteres!';
      let spy = spyOn(window, 'alert')
      
      component.add('0002',"OLA",'Nao gosto de atum','Localidade',"4000-123",10,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro id lenght <3',() => {
      const msg = 'ID necessita 3 caracteres!';
      let spy = spyOn(window, 'alert')
      
      component.add('02',"OLA",'Nao gosto de atum','Localidade',"4000-123",10,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro designaçao tamanho >50',() => {
      const msg = 'Designação limite caracteres 50!';
      let spy = spyOn(window, 'alert')
      
      component.add('002',"fffffffffffffffffffffffffffffffffffffffffffffffffffffffff",'fffffffff','Localidade',"4000-123",10,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro codigo Postal1',() => {
      const msg = 'Código Postal com formato inválido';
      let spy = spyOn(window, 'alert')
      
      component.add('002',"OLA",'ffffffffffffffff','Localidade',"40-123",10,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro codigo Postal2',() => {
      const msg = 'Código Postal com formato inválido';
      let spy = spyOn(window, 'alert')
      
      component.add('002',"OLA",'ffffffffffffffff','Localidade',"4000-1",10,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro latitude >90',() => {
      const msg = 'Latitude fora dos limites válidos!';
      let spy = spyOn(window, 'alert')
      
      component.add('002',"OLA",'fffffffffffffffff','Localidade',"4000-123",100,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro latitude <-90',() => {
      const msg = 'Latitude fora dos limites válidos!';
      let spy = spyOn(window, 'alert')
      
      component.add('002',"OLA",'fffffffffffffffff','Localidade',"4000-123",-100,10);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro longitude <-180',() => {
      const msg = 'Longitude fora dos limites válidos!';
      let spy = spyOn(window, 'alert')
      
      component.add('002',"OLA",'fffffffffffffffff','Localidade',"4000-123",10,-200);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar armazem erro longitude >180',() => {
      const msg = 'Longitude fora dos limites válidos!';
      let spy = spyOn(window, 'alert')
      
      component.add('002',"OLA",'fffffffffffffffff','Localidade',"4000-123",10,200);
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

  });

  describe('#getArmazens', () => {
    const armazem1 = {id: '400', designacao:"OLA", morada: "Nao gosto de atum", localidade:"Localidade", codigoPostal:"4000-123", latitude: 10, longitude:10 }
    const armazem2 = {id: '401', designacao:"OLA", morada: "Nao gosto de atum", localidade:"Localidade", codigoPostal:"4000-123", latitude: 11, longitude:11 }
    const armazens ={armazem1, armazem2};
    it('listar armazens', () => {
      component.getArmazens();
      expect(armazens).toBeTruthy();
    })
  });

  describe('#eliminarArmazem',() => {
    
    it('eliminar armazem OK', () => {
      const armazem = {id: '400', designacao:"OLA", morada: "Nao gosto de atum", localidade:"Localidade", codigoPostal:"4000-123", latitude: 10, longitude:10 }
      component.delete(armazem);
      
      expect(component).toBeTruthy();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
