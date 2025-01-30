import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinonMock } from 'cypress/types/sinon';
import { Camiao } from 'src/app/model/camiao/camiao';

import { CamiaoComponent } from './camiao.component';

describe('CamiaoComponent', () => {
  let component: CamiaoComponent;
  let fixture: ComponentFixture<CamiaoComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamiaoComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CamiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#criarCamiao', () => {
    it('criar camiao OK', () => {
      //criarCamiao(matricula: string, tara: string, capacidadeCarga: string, cargaTotalBaterias: string, autonomia: string, tempoRecarregamento: string)
      component.criarCamiao('JZ-11-AH', '2000', '666', '80', '20', '30');
      expect(component).toBeTruthy();
    }
    );

    it('criar camiao erro matricula null', () => {
      const msg = 'Matricula com formato Inválido';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('', '2000', '666', '80', '20', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    });

    //Crar com matricula errada, certa = var reg = /^(([A-Z]{2}-\d{2}-(\d{2}|[A-Z]{2}))|(\d{2}-(\d{2}-[A-Z]{2}|[A-Z]{2}-\d{2})))$/;
    it('criar camiao erro matricula errada', () => {
      const msg = 'Matricula com formato Inválido';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ22-1342341-AA22', '2000', '666', '80', '20', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    });

    it('criar camiao erro tara null', () => {
      const msg = 'Obrigatório campo Tara!!';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ-11-AH', '', '666', '80', '20', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );

    it('criar camiao erro capacidadeCarga null', () => {
      const msg = 'Obrigatório campo Capacidade de Carga!!';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ-11-AH', '2000', '', '80', '20', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );

    it('criar camiao erro cargaTotalBaterias null', () => {
      const msg = 'Obrigatório campo Carga Total das Baterias!!';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ-11-AH', '2000', '666', '', '20', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );

    it('criar camiao erro autonomia null', () => {
      const msg = 'Obrigatório campo Autonomia!!';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ-11-AH', '2000', '666', '80', '', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );

    it('criar camiao erro tempoRecarregamento null', () => {
      const msg = 'Obrigatório campo Tempo de Recarregamento!!';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ-11-AH', '2000', '666', '80', '20', '');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );

    it('criar camiao erro matricula null', () => {
      const msg = 'Matricula com formato Inválido';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('', '2000', '666', '80', '20', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );

    it('criar camiao com tara <0', () => {
      const msg = 'Tara não pode ser negativo nem igual a zero!!';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ-11-AH', '-1', '666', '80', '20', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );

    it('criar camiao com capacidadeCarga <0', () => {
      const msg = 'Capacidade de Carga tem de ser SUPERIOR A ZERO!!';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ-11-AH', '2000', '-1', '80', '20', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );

    it('criar camiao com cargaTotalBaterias <0', () => {
      const msg = 'Carga Total das Baterias tem de ser SUPERIOR A ZERO!!';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ-11-AH', '2000', '666', '-1', '20', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );

    it('criar camiao com autonomia <0', () => {
      const msg = 'Autonomia tem de ser SUPERIOR A ZERO!!';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ-11-AH', '2000', '666', '80', '-1', '30');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );

    it('criar camiao com tempoRecarregamento <0', () => {
      const msg = 'Tempo de Recarregamento tem de ser SUPERIOR A ZERO!!';
      let spy = spyOn(window, 'alert')

      component.criarCamiao('JZ-11-AH', '2000', '666', '80', '20', '-1');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    }
    );
  });

  describe('desinibir camiao', () => {

    it('inibir camiao', () => {
      const msg = 'Camião com matricula: JZ-11-AH está INIBIDO!';
      let spy = spyOn(window, 'alert')

      component.inibirCamiao('JZ-11-AH');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    });

    it('desinibir camiao', () => {
      const msgAux = 'Camião com matricula: JZ-11-AH está INIBIDO!';
      const msg = 'Camião com matricula: JZ-11-AH está DESINIBIDO!';
      let spy = spyOn(window, 'alert')

      component.inibirCamiao('JZ-11-AH');
      expect(window.alert).toHaveBeenCalledWith(msgAux);
      component.desinibirCamiao('JZ-11-AH');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy;
    });
  });
});

