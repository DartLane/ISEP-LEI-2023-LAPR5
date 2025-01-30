import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaminhoComponent } from './caminho.component';
import { of, throwError } from 'rxjs'; // make sure to import the throwError from rxjs
import { CaminhoService } from 'src/app/service/caminho.service';
import { MessageService } from 'src/app/service/message.service';

describe('CaminhoComponent', () => {
  let component: CaminhoComponent;
  let fixture: ComponentFixture<CaminhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminhoComponent,CaminhoService ],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#criarCaminho',()=> {
  
    it('criar caminho OK',() => {
      component.criarCaminho('40','2','zz1','zz2','20');
      expect(component).toBeTruthy();
    });

    it('criar caminho erro energiaNecessariaKWh null',() => {
      const msg = 'Obrigatório campo Energia Necessária para percorrer Caminho em KWh!!';
      let spy = spyOn(window, 'alert')
      
      component.criarCaminho('','2','zz1','zz2','20');
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar caminho erro energiaNecessariaKWh <0',() => {
      const msg = 'Obrigatório que o campo Energia Necessária para percorrer Caminho em KWh, seja maior que 0!!';
      let spy = spyOn(window, 'alert')
      
      component.criarCaminho('-4','2','zz1','zz2','20');
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar caminho erro energiaNecessariaKWh =0',() => {
      const msg = 'Obrigatório campo Energia Necessária para percorrer Caminho em KWh!!';
      let spy = spyOn(window, 'alert')
      
      component.criarCaminho('0','2','zz1','zz2','20');
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar caminho erro tempoDeslocação null',() => {
      const msg = 'Obrigatório campo Tempo de deslocacao minimo entre armazéns em Minutos!!';
      let spy = spyOn(window, 'alert')
      
      component.criarCaminho('20','','zz1','zz2','20');
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar caminho erro tempoDeslocação <0',() => {
      const msg = 'Obrigatório que o campo Tempo de deslocacao minimo entre armazéns em Minutos, seja maior que 0!!';
      let spy = spyOn(window, 'alert')
      
      component.criarCaminho('20','-2','zz1','zz2','20');
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar caminho erro tempoDeslocação =0',() => {
      const msg = 'Obrigatório campo Tempo de deslocacao minimo entre armazéns em Minutos!!';
      let spy = spyOn(window, 'alert')
      
      component.criarCaminho('20','0','zz1','zz2','20');
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar caminho erro idArmazemOrizem null',() => {
      const msg = 'Obrigatório campo Identificador do Armazém de Origem!!';
      let spy = spyOn(window, 'alert')
      
      component.criarCaminho('20','10','','zz2','20');
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar caminho erro idArmazemDestino null',() => {
      const msg = 'Obrigatório campo Identificador do Armazém de Destino!!';
      let spy = spyOn(window, 'alert')
      
      component.criarCaminho('20','10','zz1','','20');
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar caminho erro distancia entre armazens null',() => {
      const msg = 'Obrigatório campo Distância entre os 2 armazéns!!';
      let spy = spyOn(window, 'alert')
      
      component.criarCaminho('20','10','zz1','zz3','');
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });

    it('criar caminho erro distancia entre armazens <0',() => {
      const msg = 'Obrigatório que o campo Distância entre os 2 armazéns, seja maior que 0!!';
      let spy = spyOn(window, 'alert')
      
      component.criarCaminho('20','10','zz1','zz3','-2');
      expect(window.alert).toHaveBeenCalledWith(msg);
      
      expect(spy).toBeTruthy;
    });
  });

  describe('#updateCaminho',() => {
    
    it('editar caminho OK',() => {
      component.updateCaminho('1','20','10','zz1','zz3','20');
    
      expect(component).toBeTruthy();
    });

    it('editar caminho erro id null',() => {
      const msg = 'Obrigatório campo Identificador Caminho!!';
      let spy = spyOn(window, 'alert');

      component.updateCaminho('','20','10','zz1','zz3','20');
      
      expect(window.alert).toHaveBeenCalledWith(msg);
      expect(spy).toBeTruthy();
    });

    it('editar caminho erro energia necessaria null',() => {
      const msg = 'Obrigatório campo Energia Necessária para percorrer Caminho em KWh!!';
      let spy = spyOn(window, 'alert');

      component.updateCaminho('1','','10','zz1','zz3','20');
      
      expect(window.alert).toHaveBeenCalledWith(msg);
      expect(spy).toBeTruthy();
    });

    it('editar caminho erro energia necessaria <0',() => {
      const msg = 'Obrigatório que o campo Energia Necessária para percorrer Caminho em KWh, seja maior que 0!!';
      let spy = spyOn(window, 'alert');

      component.updateCaminho('1','-2','10','zz1','zz3','20');
      
      expect(window.alert).toHaveBeenCalledWith(msg);
      expect(spy).toBeTruthy();
    });

    it('editar caminho erro tempo deslocacao null',() => {
      const msg = 'Obrigatório campo Tempo de deslocacao minimo entre armazéns em Minutos!!';
      let spy = spyOn(window, 'alert');

      component.updateCaminho('1','20','','zz1','zz3','20');
      
      expect(window.alert).toHaveBeenCalledWith(msg);
      expect(spy).toBeTruthy();
    });

    it('editar caminho erro tempo deslocacao <0',() => {
      const msg = 'Obrigatório que o campo Tempo de deslocacao minimo entre armazéns em Minutos, seja maior que 0!!';
      let spy = spyOn(window, 'alert');

      component.updateCaminho('1','20','-20','zz1','zz3','20');
      
      expect(window.alert).toHaveBeenCalledWith(msg);
      expect(spy).toBeTruthy();
    });

    it('editar caminho erro id de armazem de origem null',() => {
      const msg = 'Obrigatório campo Identificador do Armazém de Origem!!';
      let spy = spyOn(window, 'alert');

      component.updateCaminho('1','20','40','','zz3','20');
      
      expect(window.alert).toHaveBeenCalledWith(msg);
      expect(spy).toBeTruthy();
    });

    it('editar caminho erro id de armazem de destino null',() => {
      const msg = 'Obrigatório campo Identificador do Armazém de Destino!!';
      let spy = spyOn(window, 'alert');

      component.updateCaminho('1','20','40','zz1','','20');
      
      expect(window.alert).toHaveBeenCalledWith(msg);
      expect(spy).toBeTruthy();
    });

    it('editar caminho erro distancia entre 2 armazens null',() => {
      const msg = 'Obrigatório campo Distância entre os 2 armazéns!!';
      let spy = spyOn(window, 'alert');

      component.updateCaminho('1','20','40','zz1','zz3','');
      
      expect(window.alert).toHaveBeenCalledWith(msg);
      expect(spy).toBeTruthy();
    });

    it('editar caminho erro distancia entre 2 armazens <0',() => {
      const msg = 'Obrigatório que o campo Distância entre os 2 armazéns, seja maior que 0!!';
      let spy = spyOn(window, 'alert');

      component.updateCaminho('1','20','40','zz1','zz3','-20');
      
      expect(window.alert).toHaveBeenCalledWith(msg);
      expect(spy).toBeTruthy();
    });
  });

  describe('#listarCaminhos', () => {
    const caminho1 = {id:'1',energiaNecessaria:'20',tempoDeslocacaoMin:'40',idArmazemOrigem:'zz1',idArmazemDestino:'zz3',distanciaEntreArmazens:'-20'}
    const caminho2 = {id:'2',energiaNecessaria:'20',tempoDeslocacaoMin:'40',idArmazemOrigem:'zz1',idArmazemDestino:'zz3',distanciaEntreArmazens:'-20'}
    const caminhos ={caminho1, caminho2};
    it('listar caminhos', () => {
      component.listarCaminhos();
      expect(caminhos).toBeTruthy();
      
    });

  });

  describe('#paginacaoCaminhos', () => {
    const caminho1 = {id:'1',energiaNecessaria:'20',tempoDeslocacaoMin:'40',idArmazemOrigem:'zz1',idArmazemDestino:'zz3',distanciaEntreArmazens:'-20'}
    const caminho2 = {id:'2',energiaNecessaria:'20',tempoDeslocacaoMin:'40',idArmazemOrigem:'zz1',idArmazemDestino:'zz3',distanciaEntreArmazens:'-20'}
    const caminhos ={caminho1, caminho2};
    var data = {caminhos: {caminho1, caminho2},total: 8,pageSize:3};
    let service = fixture.debugElement.injector.get(CaminhoService);
    var spy = spyOn(service,'listarCaminhos').and.callFake(() => {return of({data})})
    
    it('listar caminhos', () => {
      component.listarCaminhos();
      expect(spy).toHaveBeenCalled();
      
    });

  });
    
  /*describe('#eliminarCaminho',() => {
    
    it('eliminar caminho OK', () => {
      component.deleteCaminho('1');
      
      expect(component).toBeTruthy();
    });
  });*/
});
