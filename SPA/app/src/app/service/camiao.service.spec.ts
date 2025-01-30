import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CamiaoService } from './camiao.service';
import { Camiao } from '../model/camiao/camiao';
import { HttpResponse } from '@angular/common/http';

describe('CamiaoService', () => {
  let service: CamiaoService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CamiaoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getCamioes', () => {
    it('should return an Observable<Camiao[]>', () => {
      const dummyCamioes = [
        { id: 1, matricula: 'JZ-11-AH', tara: 2000, capacidadeCarga: 666, cargaTotalBaterias: 80, autonomia: 20, tempoRecarregamento: 30 }];

      service.listarCamioes().subscribe(camioes => {
        expect(camioes.length).toBe(1);
        expect(camioes).toEqual(dummyCamioes);
      });

      const request = httpMock.expectOne(service.URL);
      expect(request.request.method).toBe("GET");
      request.flush(dummyCamioes);
    });

  });

  describe('#criarCamiao', () => {
    it('should return an Observable<Camiao>', () => {
      const dummyCamiao = { id: 1, matricula: 'JZ-11-AH', tara: 2000, capacidadeCarga: 666, cargaTotalBaterias: 80, autonomia: 20, tempoRecarregamento: 30 };

      service.criarCamiao('JZ-11-AH', 2000, 666, 80, 20, 30).subscribe(camiao => {
        expect(camiao).toEqual(dummyCamiao);
      });

      const request = httpMock.expectOne(service.URL);
      expect(request.request.method).toBe("POST");
      request.flush(dummyCamiao);
    }
    );
  });

  describe('#atualizarCamiao', () => {
    it('should return an Observable<Camiao>', () => {
      const dummyCamiao = { id: 1, matricula: 'JZ-11-AH', tara: 2000, capacidadeCarga: 666, cargaTotalBaterias: 80, autonomia: 20, tempoRecarregamento: 30 };

      service.editarCamiao(dummyCamiao).subscribe(camiao => {
        expect(camiao).toEqual(dummyCamiao);
      });

      const request = httpMock.expectOne(service.URL + '1');
      expect(request.request.method).toBe("PUT");
      request.flush(dummyCamiao);
    }
    );

    it('should return an Observable<Camiao>', () => {
      ///dummyCamiao Observable<any>
      const dummyCamiao = { id: 1, matricula: 'JZ-11-AH', tara: 2000, capacidadeCarga: 666, cargaTotalBaterias: 80, autonomia: 20, tempoRecarregamento: 30 };
      //return value is Observable<any>
      const spy = spyOn(service, 'editarCamiao').and.returnValue(dummyCamiao as any);
      //call the method
      service.editarCamiao(dummyCamiao);
      //check if the method was called
      expect(spy).toHaveBeenCalled();
      //check if the method was called with the right parameters
      expect(spy).toHaveBeenCalledWith(dummyCamiao);
    });
  });

  describe('#Inibir Camião', () => {
    let camiao: Camiao = { 
      matricula: 'AA-22-EE',
      tara: 7300,
      capacidadeCarga: 23,
      cargaTotalBaterias: 80,
      autonomia: 100,
      tempoRecarregamento: 60 };

      it('Inibir Camião OK', () => {
        service.inibirCamiao("AA-22-EE").subscribe({
          next: data => expect(data)
        .withContext('')
        .toEqual(camiao),
      error: fail
        })

      // CamiaoService fez solicitação para DELETE camiao
      const req = httpMock.expectOne(service.URL+'inibir/AA-22-EE');
      expect(req.request.method).toEqual('DELETE');

      // Servidor retorna o camiao depois do soft DELETE
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK' , body: camiao});
      req.event(expectedResponse);
      })
  })

  describe('#Desinibir Camião', () => {
    let camiao: Camiao = { 
      matricula: 'AA-22-EE',
      tara: 7300,
      capacidadeCarga: 23,
      cargaTotalBaterias: 80,
      autonomia: 100,
      tempoRecarregamento: 60 };

      it('Desinibir Camião OK', () => {
        service.desinibirCamiao("AA-22-EE").subscribe({
          next: data => expect(data)
        .withContext('')
        .toEqual(camiao),
      error: fail
        })

      // CamiaoService fez solicitação para POST camiao
      const req = httpMock.expectOne(service.URL+'desinibir/AA-22-EE');
      expect(req.request.method).toEqual('POST');

      // Servidor retorna o camiao depois do restore
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK' , body: camiao});
      req.event(expectedResponse);
      })
  })
});
