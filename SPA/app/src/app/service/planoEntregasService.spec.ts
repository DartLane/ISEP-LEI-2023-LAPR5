import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PlanoEntregaService } from './planoEntregasService';
import { Config } from '../config';
import { PlanoEntregas } from '../model/planoEntregas/planoEntregas';

describe('UserService', () => {
    let service: PlanoEntregaService;
    let httpMock: HttpTestingController;
    const URL = Config.logisticaURL + 'planoEntregas/';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(PlanoEntregaService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#getEntregas', () => {
        it('should return an Observable<PlanoEntregas[]>', () => {
            const dummyPlanos =
                { id: "1", camiaoMatricula: 1, caminho: ['c1','c2'], date: 'date', entregas: ['e1','e2','e3'] } as PlanoEntregas;

            service.getEntregas(1).subscribe(planos => {
                expect(planos.length).toBeLessThanOrEqual(3);
                expect(planos).toEqual(dummyPlanos);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URL+'/Paginado/1');
            expect(request.request.method).toBe("GET");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyPlanos);
        });
    });

    describe('#getEntrega', () => {
        it('should return an Observable<PlanoEntregas>', () => {
            const dummyPlano =
                { id: "1", camiaoMatricula: 1, caminho: ['c1','c2'], date: 'date', entregas: ['e1','e2','e3'] } as PlanoEntregas;

            service.getEntregas(1).subscribe(plano => {
                expect(plano).toEqual(dummyPlano);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URL+dummyPlano.id);
            expect(request.request.method).toBe("GET");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyPlano);
        });
    });

});