import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { CaminhoService } from './caminho.service';
import Caminho from '../model/caminho/caminho';
import ICaminhoDTO from '../dto/ICaminhoDTO';
import { Config } from '../config';

describe('CaminhoService', () => {
  let service: CaminhoService;
  let httpMock: HttpTestingController;
  const URL = Config.logisticaURL + 'Caminhos';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    
    });
    service = TestBed.inject(CaminhoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpMock.verify();
  });

  describe('#listarCaminhos',() => {
    let expectedCaminhos: Caminho[];
  
    beforeEach(() => {
      expectedCaminhos = [
        {id:'1',energiaNecessariaKWh: 40, tempoDeslocacaoMin: 20, idArmazemOrigem: 'zz1', idArmazemDestino: 'zz3', distanciaEntreArmazens: 20 },
        {id:'2',energiaNecessariaKWh: 42, tempoDeslocacaoMin: 20, idArmazemOrigem: 'zz1', idArmazemDestino: 'zz3', distanciaEntreArmazens: 20 },
      ] as Caminho[];
    });

    it('listar todos os caminhos existentes', () => {
      service.listarCaminhos().subscribe({
        next: caminhos => expect(caminhos)
          .withContext('should retunr expected caminhos')
          .toEqual(expectedCaminhos),
        error: fail
      });

      const req = httpMock.expectOne(URL);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedCaminhos);
    }); 

    it('espera-se que os dois caminhos sejam returnados', () => {
      service.listarCaminhos().subscribe({
        next: caminhos => expect(caminhos.length)
          .withContext('sho')
          .toEqual(2),
        error: fail
      })

      const req = httpMock.expectOne(URL);
      req.flush(expectedCaminhos);
    });

    it('espera-se que  nenhum caminho seja returnado', () => {
      service.listarCaminhos().subscribe({
        next: caminhos => expect(caminhos.length)
          .withContext('sho')
          .toEqual(0),
        error: fail
      })

      const req = httpMock.expectOne(URL);
      req.flush([]);
    });
  }); 
  
  describe('#criarCaminhos', () => {
    let criarCaminho: ICaminhoDTO;

    beforeEach(() => {
      service = TestBed.inject(CaminhoService);
    });
   
    it('criar um caminho OK e returna-lo', () => {
      criarCaminho = {energiaNecessariaKWh: 40, tempoDeslocacaoMin: 10, idArmazemOrigem: 'zz1', idArmazemDestino: 'zz2', distanciaEntreArmazens: 20 },
      
      service.criarCaminho(40,10,'zz1','zz2',20).subscribe({
        next: data => expect(data)
        .withContext('').toEqual(criarCaminho),
       error: fail 
      });

      // CaminhoService fez solicitação para POST caminho
      const req = httpMock.expectOne(URL);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(criarCaminho);

      // Servidor retorna o caminho depois do POST
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: criarCaminho });
      req.event(expectedResponse);
    });
  })

  describe('#updateCaminhos', () => {
    let caminho: ICaminhoDTO =  {energiaNecessariaKWh: 40, tempoDeslocacaoMin: 10, idArmazemOrigem: 'zz1', idArmazemDestino: 'zz2', distanciaEntreArmazens: 20 };
    const msg = 'Not Found';

    beforeEach(() => {
      service = TestBed.inject(CaminhoService);
    });
   
    it('editar um caminho OK e returna-lo', () => {
      service.updateCaminho('1',40,10,'zz1','zz2',20).subscribe({
        next: data => expect(data)
          .withContext('').toEqual(caminho),
          error: fail
      })

      // CaminhoService fez solicitação para POST caminho
      const req = httpMock.expectOne(URL + '/1');
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(caminho);

      // Servidor retorna o caminho depois do POST
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: caminho });
      req.event(expectedResponse);
    });

    it('editar um caminho - NOT FOUND', () => {
      service.updateCaminho('4',40,10,'zz1','zz2',20).subscribe({
        next: data => fail('updateCaminho'),
        error: error => expect(error.message).toContain(msg)    
      });

      // CaminhoService fez solicitação para POST caminho
      const req = httpMock.expectOne(URL+'/4');
      
      req.flush(msg, {status: 404, statusText:'Not Found'});
    });

  describe('#eliminarCaminhos', () => {
    let caminho: Caminho =  {id:'1',energiaNecessariaKWh: 40, tempoDeslocacaoMin: 10, idArmazemOrigem: 'zz1', idArmazemDestino: 'zz2', distanciaEntreArmazens: 20 };

    it('eliminar um caminho OK', () => {
      service.deleteCaminho('1').subscribe({
        next: data => expect(data)
        .withContext('')
        .toEqual(caminho),
      error: fail
      });

      // CaminhoService fez solicitação para DELETE caminho
      const req = httpMock.expectOne(URL+'/1');
      expect(req.request.method).toEqual('DELETE');

      // Servidor retorna o caminho depois do DELETE
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK' , body: caminho});
      req.event(expectedResponse);
    });
  });
});
})