import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EntregaService } from './entrega.service';
import { Config } from '../config';
import { Entrega } from '../model/entrega/entrega';

describe('EntregaService', () => {
  let service: EntregaService;
  let httpMock: HttpTestingController;
  const URL = Config.gestaoArmazemURL + 'Entregas/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EntregaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#criarEntrega', () => {
    it('should return an Observable<Entrega>', () => {
      const dummyEntrega =
        { id: "1", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega;

      service.criarEntrega(dummyEntrega).subscribe(entrega => {
        expect(entrega).toEqual(dummyEntrega);
      });

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const request = httpMock.expectOne(URL);
      expect(request.request.method).toBe("POST");

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      request.flush(dummyEntrega);
    });
  });

  describe('#getEntregas', () => {
    it('should return an Observable<Entrega[]>', () => {
      const dummyEntregas = [
        { id: "1", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega];

      service.getEntregas().subscribe(entregas => {
        expect(entregas.length).toBe(1);
        expect(entregas).toEqual(dummyEntregas);
      });

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const request = httpMock.expectOne(URL);
      expect(request.request.method).toBe("GET");

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      request.flush(dummyEntregas);
    });
  });

  describe('#listarEntregasArmAsc', () => {
    it('should return an Observable<Entrega[]>', () => {
      const dummyEntregas = [
        { id: "1", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega];

      service.listarEntregasArmAsc().subscribe(entregas => {
        expect(entregas.length).toBe(1);
        expect(entregas).toEqual(dummyEntregas);
      });

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const request = httpMock.expectOne(URL+"armazemAsc");
      expect(request.request.method).toBe("GET");

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      request.flush(dummyEntregas);
    });
  });

  describe('#listarEntregasArmDesc', () => {
    it('should return an Observable<Entrega[]>', () => {
      const dummyEntregas = [
        { id: "1", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega,
        { id: "3", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega];

      service.listarEntregasArmDesc().subscribe(entregas => {
        expect(entregas.length).toBe(2);
        expect(entregas).toEqual(dummyEntregas);
      });

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const request = httpMock.expectOne(URL+"armazemDesc");
      expect(request.request.method).toBe("GET");

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      request.flush(dummyEntregas);
    });
  });

  describe('#getEntrega', () => {
    it('should return an Observable<Entrega>', () => {
      const dummyEntrega = { id: "1", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega;
      const id = "1";

      service.getEntrega(id).subscribe(entrega => {
        expect(entrega).toEqual(dummyEntrega);
      });

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const request = httpMock.expectOne(URL+id);
      expect(request.request.method).toBe("GET");

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      request.flush(dummyEntrega);
    });
  });

  describe('#filterEntregasByArmazem', () => {
    it('should return an Observable<Entrega[]>', () => {
      const dummyEntregas = [
        { id: "1", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega,
        { id: "3", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega];
      const armazem = "001";
      
      service.filterEntregasByArmazem(armazem).subscribe(entregas => {
        expect(entregas.length).toBe(2);
        expect(entregas).toEqual(dummyEntregas);
      });

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const request = httpMock.expectOne(URL+'armazem/' + armazem);
      expect(request.request.method).toBe("GET");

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      request.flush(dummyEntregas);
    });
  });

  describe('#filterEntregasBetweenDates', () => {
    it('should return an Observable<Entrega[]>', () => {
      const dummyEntregas = [
        { id: "1", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega,
        { id: "3", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega];
      const date1 = "11/01/2022";
      const date2 = "12/01/2022";
      
      service.filterEntregasBetweenDates(date1, date2).subscribe(entregas => {
        expect(entregas.length).toBe(2);
        expect(entregas).toEqual(dummyEntregas);
      });

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const request = httpMock.expectOne(URL+ 'data/data1='+date1+'&data2='+date2);
      expect(request.request.method).toBe("GET");

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      request.flush(dummyEntregas);
    });
  });

  describe('#updateEntrega', () => {
    it('should return an Observable<Entrega>', () => {
      const dummyEntrega =
        { id: "1", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega;

      service.updateEntrega(dummyEntrega).subscribe(entrega => {
        expect(entrega).toEqual(dummyEntrega);
      });

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const request = httpMock.expectOne(URL+dummyEntrega.id);
      expect(request.request.method).toBe("PUT");

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      request.flush(dummyEntrega);
    });
  });

  describe('#deleteEntrega', () => {
    it('should return an Observable<Entrega>', () => {
      const dummyEntrega =
        { id: "1", tempodescarga: 10, tempocarga: 15, massa: 300, armazemId: "001", dia: 2, mes: 2, ano: 2000 } as Entrega;

      service.deleteEntrega(dummyEntrega.id).subscribe(entrega => {
        expect(entrega).toEqual(dummyEntrega);
      });

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const request = httpMock.expectOne(URL+dummyEntrega.id+'/hard');
      expect(request.request.method).toBe("DELETE");

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      request.flush(dummyEntrega);
    });
  });
});