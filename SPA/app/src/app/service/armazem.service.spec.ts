import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ArmazemService } from './armazem.service';
import { Armazem } from '../model/armazem/armazem';
import { Config } from '../config';

describe('ArmazemService', () => {
  let service: ArmazemService;
  let httpMock: HttpTestingController;
  const URL = Config.gestaoArmazemURL + 'armazens';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ArmazemService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpMock.verify();
  });

  describe('#criarArmazens', () => {
    let criarArmazem: Armazem;

    beforeEach(() => {
      service = TestBed.inject(ArmazemService);
    });
   
    it('criar um armazem OK e returna-lo', () => {
      criarArmazem = {id: '002', designacao:"OLA", morada: "Nao gosto de atum", localidade:"Localidade", codigoPostal:"4000-123", latitude: 11, longitude:11 },

      service.addArmazem(criarArmazem).subscribe({
        next: data => expect(data)
        .withContext('').toEqual(criarArmazem),
       error: fail 
      });

      // ArmazemService fez solicitação para POST caminho
      const req = httpMock.expectOne(URL+'/');
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(criarArmazem);

      // Servidor retorna o caminho depois do POST
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: criarArmazem });
      req.event(expectedResponse);
    });


    describe('#updateArmazem', () => {
      let armazem: Armazem;
      const msg = 'Not Found';
  
      beforeEach(() => {
        service = TestBed.inject(ArmazemService);
      });
     
      it('editar um armazem OK e returna-lo', () => {
        armazem =  {id: '002', designacao:"OLA", morada: "Nao gosto de atum", localidade:"Localidade", codigoPostal:"4000-123", latitude: 10, longitude:10 };
        service.updateArmazem(armazem).subscribe({
          next: data => expect(data)
            .withContext('').toEqual(armazem),
            error: fail
        })
  
        // CaminhoService fez solicitação para POST caminho
        const req = httpMock.expectOne(URL + '/002');
        expect(req.request.method).toEqual('PUT');
        expect(req.request.body).toEqual(armazem);
  
        // Servidor retorna o caminho depois do POST
        const expectedResponse = new HttpResponse(
          { status: 200, statusText: 'OK', body: armazem });
        req.event(expectedResponse);
      });
  
      it('editar um caminho - NOT FOUND', () => {
        service.updateArmazem({id: '234', designacao:"OLA", morada: "Nao gosto de atum", localidade:"Localidade", codigoPostal:"4000-123", latitude: 10, longitude:10 }as Armazem).subscribe({
          error: error => expect(error.message).toContain(msg)    
        });
  
        // CaminhoService fez solicitação para POST caminho
        const req = httpMock.expectOne(URL+'/234');
        
        req.flush(msg, {status: 404, statusText:'Not Found'});
      });
  })

  describe('#eliminarArmazem', () => {
    let armazem: Armazem =  {id: '002', designacao:"OLA", morada: "Nao gosto de atum", localidade:"Localidade", codigoPostal:"4000-123", latitude: 10, longitude:10 };

    it('eliminar um armazem OK', () => {
      service.deleteArmazem('002').subscribe({
        next: data => expect(data)
        .withContext('')
        .toEqual(armazem),
      error: fail
      });

      // CaminhoService fez solicitação para DELETE caminho
      const req = httpMock.expectOne(URL+'/002/hard');
      expect(req.request.method).toEqual('DELETE');

      // Servidor retorna o caminho depois do DELETE
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK' , body: armazem});
      req.event(expectedResponse);
    });
  });

});
})
