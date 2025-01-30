import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaComponent } from './entrega.component';
import { Entrega } from '../../model/entrega/entrega';

describe('EntregaComponent', () => {
  let component: EntregaComponent;
  let fixture: ComponentFixture<EntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntregaComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#criarEntrega', () => {

    it('criar entrega OK', () => {
      component.criarEntrega('10', '10', '300', '001', '10', '11', '2022');
      expect(component).toBeTruthy();
    });

    it('criar entrega erro tempo descarga null', () => {
      const msg = 'Obrigatório campo Tempo Descarga!!';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('', '10', '300', '001', '10', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro Tempo Carga null', () => {
      const msg = 'Obrigatório campo Tempo Carga!!';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '', '300', '001', '10', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro Massa null', () => {
      const msg = 'Obrigatório campo Massa!!';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '', '001', '10', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro Armazem ID null', () => {
      const msg = 'Obrigatório campo Armazem ID!!';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '300', '', '10', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro Dia null', () => {
      const msg = 'Obrigatório campo Dia!!';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '300', '001', '', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro Mes null', () => {
      const msg = 'Obrigatório campo Mes!!';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '300', '001', '10', '', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro Ano null', () => {
      const msg = 'Obrigatório campo Ano!!';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '300', '001', '10', '11', '');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro tempo descarga = 0', () => {
      const msg = 'O Tempo de Descarga não pode ser negativo nem 0';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('0', '10', '300', '001', '10', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro tempo descarga < 0', () => {
      const msg = 'O Tempo de Descarga não pode ser negativo nem 0';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('-5', '10', '300', '001', '10', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro tempo carga = 0', () => {
      const msg = 'O Tempo de Carga não pode ser negativo nem 0';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '0', '300', '001', '10', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro tempo carga < 0', () => {
      const msg = 'O Tempo de Carga não pode ser negativo nem 0';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '-10', '300', '001', '10', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro massa = 0', () => {
      const msg = 'A Massa da entrega não pode ser negativo nem 0';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '0', '001', '10', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega erro massa < 0', () => {
      const msg = 'A Massa da entrega não pode ser negativo nem 0';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '-300', '001', '10', '11', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega dia invalido > 31', () => {
      const msg = 'Inválido (mes com mais de 31 dias)';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '300', '001', '32', '1', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega dia invalido > 30', () => {
      const msg = 'Inválido (mes com mais de 30 dias)';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '300', '001', '31', '4', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega dia invalido > 29', () => {
      const msg = 'Inválido (mes com mais de 29 dias)';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '300', '001', '30', '2', '2024');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

    it('criar entrega dia invalido > 28', () => {
      const msg = 'Inválido (mes com mais de 28 dias)';
      let spy = spyOn(window, 'alert')

      component.criarEntrega('10', '10', '300', '001', '29', '2', '2022');
      expect(window.alert).toHaveBeenCalledWith(msg);

      expect(spy).toBeTruthy();
    });

  });

  describe('#listarEntregas', () => {
    const entrega1 = { id: '1', tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: '001', dia: 2, mes: 2, ano: 2000 } as Entrega;
    const entrega2 = { id: '2', tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: '001', dia: 2, mes: 2, ano: 2000 } as Entrega;
    const entregas = { entrega1, entrega2 };
    it('listar entregas OK', () => {
      component.listarEntregas();
      expect(entregas).toBeTruthy();
    })
  });

  describe('#listarEntregasArmAsc', () => {
    const entrega1 = { id: '1', tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: '001', dia: 2, mes: 2, ano: 2000 } as Entrega;
    const entrega2 = { id: '2', tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: '001', dia: 2, mes: 2, ano: 2000 } as Entrega;
    const entregas = { entrega1, entrega2 };
    it('listar entregas armazem ascendente OK', () => {
      component.listarEntregasArmAsc();
      expect(entregas).toBeTruthy();
    })
  });

  describe('#listarEntregasArmDesc', () => {
    const entrega1 = { id: '1', tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: '001', dia: 2, mes: 2, ano: 2000 } as Entrega;
    const entrega2 = { id: '2', tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: '001', dia: 2, mes: 2, ano: 2000 } as Entrega;
    const entregas = { entrega1, entrega2 };
    it('listar entregas armazem descendente OK', () => {
      component.listarEntregasArmDesc();
      expect(entregas).toBeTruthy();
    })
  });
});