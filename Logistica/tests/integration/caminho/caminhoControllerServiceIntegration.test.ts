import * as sinon from 'sinon';

import { Response, Request, NextFunction } from 'express';

import { Container } from 'typedi';
import config from "../../../config";

import { Result } from '../../../src/core/logic/Result';

import ICaminhoDTO from '../../../src/dto/ICaminhoDTO';
import CaminhoController from '../../../src/controllers/caminhoController';
import ICaminhoService from '../../../src/services/IServices/ICaminhoService';
import CaminhoService from '../../../src/services/caminhoService';
import { Caminho } from '../../../src/domain/caminho/Caminho';
import ICaminhoRepo from '../../../src/services/IRepos/ICaminhoRepo';
import { CaminhoMap } from '../../../src/mappers/CaminhoMap';
import IArmazemRepo from '../../../src/services/IRepos/IArmazemRepo';

var sinonTest = require("sinon-test");
var test = sinonTest(sinon);

describe('caminho integration controller-service', function () {
    beforeEach(function () {
    });

    let caminhoSchemaClass = require("../../../src/persistence/schemas/caminhoSchema")
    Container.set('caminhoSchema',caminhoSchemaClass);

    let caminhoRepoClass = require("../../../src/repos/caminhoRepo").default;
    let caminhoRepoInstance = Container.get(caminhoRepoClass);
    Container.set(config.repos.caminho.name, caminhoRepoInstance);

    Container.set(config.requests.armazens.name, "testArmazemRequests");

    let armazemRepoClass = require("../../../src/repos/armazemRepo").default;
    let armazemRepoInstance = Container.get(armazemRepoClass);
    Container.set(config.repos.armazem.name, armazemRepoInstance);

    let caminhoServiceClass = require("../../../src/services/caminhoService").default;
    let caminhoServiceInstance = Container.get(caminhoServiceClass)
    Container.set(config.services.caminho.name, caminhoServiceInstance);


    it('createCaminho: returns json with object values', test( async function () {
        const body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        const req: Partial<Request> = {};
        req.body = body;

        const res: Partial<Response> = {
            json: this.spy()
        };
        const next: Partial<NextFunction> = () => { };

        const result = CaminhoMap.toDomain(body);
        const stub=sinon.stub(caminhoRepoInstance, "save").returns(result);
        const stub2=sinon.stub(armazemRepoInstance, "exists").returns(true);
        
        const ctrl = new CaminhoController(caminhoServiceInstance as ICaminhoService);

        await ctrl.createCaminho(<Request>req, <Response>res, <NextFunction>next);
        
        sinon.assert.calledOnce(stub);
        sinon.assert.calledTwice(stub2);

        stub.restore();
        stub2.restore();
    }));


    it('updateCaminho: returns json with object values', test( async function () {
        const body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        const req: Partial<Request> = {};
        req.body = body;
        let param = { "id": "123" };
        req.params = param;

        const res: Partial<Response> = {};
        const next: Partial<NextFunction> = () => { };

        const body2 = {
            "energiaNecessariaKWh": 10,
            "tempoDeslocacaoMin": 20,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'bbb',
            "distanciaEntreArmazens": 15
        } as ICaminhoDTO;

        

        const toUpdate = CaminhoMap.toDomain(body2);
        const result = CaminhoMap.toDomain(body);
        const stub=sinon.stub(caminhoRepoInstance, "findByDomainId").returns(toUpdate);
        const stub2=sinon.stub(caminhoRepoInstance, "save");
        const stub3=sinon.stub(armazemRepoInstance, "exists").returns(true);
        
        const ctrl = new CaminhoController(caminhoServiceInstance as ICaminhoService);

        await ctrl.updateCaminho(<Request>req, <Response>res, <NextFunction>next);
        
        sinon.assert.calledOnce(stub);
        sinon.assert.calledOnce(stub2);
        sinon.assert.calledWith(stub3);
        sinon.assert.calledWith(
            stub,
            sinon.match("123")
        );

        stub.restore();
        stub2.restore();
        stub3.restore();
    }));


    it('partialUpdateCaminho: returns json with object values', test( async function () {
        const body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
        };
        const req: Partial<Request> = {};
        req.body = body;
        let param = { "id": "123" };
        req.params = param;

        const res: Partial<Response> = {};
        const next: Partial<NextFunction> = () => { };

        const body2 = {
            "energiaNecessariaKWh": 10,
            "tempoDeslocacaoMin": 20,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'bbb',
            "distanciaEntreArmazens": 15
        } as ICaminhoDTO;

        

        const toUpdate = CaminhoMap.toDomain(body2);
        const stub=sinon.stub(caminhoRepoInstance, "findByDomainId").returns(toUpdate);
        const stub2=sinon.stub(caminhoRepoInstance, "save");
        const stub3=sinon.stub(armazemRepoInstance, "exists").returns(true);
        
        const ctrl = new CaminhoController(caminhoServiceInstance as ICaminhoService);

        await ctrl.partialUpdateCaminho(<Request>req, <Response>res, <NextFunction>next);
        
        sinon.assert.calledOnce(stub);
        sinon.assert.calledOnce(stub2);
        sinon.assert.calledOnce(stub3);
        sinon.assert.calledWith(
            stub,
            sinon.match("123")
        );

        stub.restore();
        stub2.restore();
        stub3.restore();
    }));


    it('getById: returns json with object values', test( async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let req: Partial<Request> = {};
        let param = {
            "id": "123"
        }
        req.params = param;

        let res: Partial<Response> = {};
        let next: Partial<NextFunction> = () => { };

        const caminho = CaminhoMap.toDomain(body);
        
        const stub=sinon.stub(caminhoRepoInstance, "findByDomainId").returns(caminho);

        const ctrl = new CaminhoController(caminhoServiceInstance as ICaminhoService);

        await ctrl.getById(<Request>req, <Response>res, <NextFunction>next);
    
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(
            stub,
            sinon.match("123")
        );

        stub.restore();
    }));


    it('listarTodosCaminhos: returns json with object values', test( async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let body2 = {
            "energiaNecessariaKWh": 10,
            "tempoDeslocacaoMin": 20,
            "idArmazemOrigem": 'bbb',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 151
        };
        let req: Partial<Request> = {};
        let param = {
            "id": "123"
        }
        req.params = param;

        let res: Partial<Response> = {};
        let next: Partial<NextFunction> = () => { };

        const caminho = CaminhoMap.toDomain(body);
        const caminho2 = CaminhoMap.toDomain(body2);
        
        const stub=sinon.stub(caminhoRepoInstance, "listarTodosCaminhos").returns([caminho,caminho2]);

        const ctrl = new CaminhoController(caminhoServiceInstance as ICaminhoService);

        await ctrl.listarTodosCaminhos(<Request>req, <Response>res, <NextFunction>next);
    
        sinon.assert.calledOnce(stub);

        stub.restore();
    }));


    it('listarPorIdArmazemOrigem: returns json with object values', test( async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let body2 = {
            "energiaNecessariaKWh": 10,
            "tempoDeslocacaoMin": 20,
            "idArmazemOrigem": 'bbb',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 151
        };
        let req: Partial<Request> = {};
        let param = {
            "idArmazemOrigem": "aaa"
        }
        req.params = param;

        let res: Partial<Response> = {};
        let next: Partial<NextFunction> = () => { };

        const caminho = CaminhoMap.toDomain(body);
        const caminho2 = CaminhoMap.toDomain(body2);
        
        const stub=sinon.stub(caminhoRepoInstance, "listarPorIdArmazemOrigem").returns([caminho,caminho2]);

        const ctrl = new CaminhoController(caminhoServiceInstance as ICaminhoService);

        await ctrl.listarPorIdArmazemOrigem(<Request>req, <Response>res, <NextFunction>next);
    
        sinon.assert.calledOnce(stub);

        stub.restore();
    }));


    it('listarPorIdArmazemDestino: returns json with object values', test( async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let body2 = {
            "energiaNecessariaKWh": 10,
            "tempoDeslocacaoMin": 20,
            "idArmazemOrigem": 'bbb',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 151
        };
        let req: Partial<Request> = {};
        let param = {
            "idArmazemDestino": "aaa"
        }
        req.params = param;

        let res: Partial<Response> = {};
        let next: Partial<NextFunction> = () => { };

        const caminho = CaminhoMap.toDomain(body);
        const caminho2 = CaminhoMap.toDomain(body2);
        
        const stub=sinon.stub(caminhoRepoInstance, "listarPorIdArmazemDestino").returns([caminho,caminho2]);

        const ctrl = new CaminhoController(caminhoServiceInstance as ICaminhoService);

        await ctrl.listarPorIdArmazemDestino(<Request>req, <Response>res, <NextFunction>next);
    
        sinon.assert.calledOnce(stub);

        stub.restore();
    }));

    it('listarTodosCaminhosPaginacao: returns json with object values', test( async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let resBody= {
            "totalItems": 6,
            "totalPages": 2,
            "currentPage": 1,
            "pageSize": 3,
            "data":[{
                "id": "123",
                "energiaNecessariaKWh": body.energiaNecessariaKWh,
                "tempoDeslocacaoMin": body.tempoDeslocacaoMin,
                "idArmazemOrigem": body.idArmazemOrigem,
                "idArmazemDestino": body.idArmazemDestino,
                "distanciaEntreArmazens": body.distanciaEntreArmazens,
            },{
                "id": "321",
                "energiaNecessariaKWh": 30,
                "tempoDeslocacaoMin": 30,
                "idArmazemOrigem": "003",
                "idArmazemDestino": "001",
                "distanciaEntreArmazens": 30,
            },{
                "id": "322",
                "energiaNecessariaKWh": 40,
                "tempoDeslocacaoMin": 50,
                "idArmazemOrigem": "002",
                "idArmazemDestino": "001",
                "distanciaEntreArmazens": 10,
            }
        ]    
        }
        let req: Partial<Request> = {};
        let param = {
            "page": "1"
        }
        req.params = param;

        let res: Partial<Response> = {};
        let next: Partial<NextFunction> = () => { };
        
        const stub=sinon.stub(caminhoRepoInstance, "listarTodosCaminhosPaginacao").returns([{
            "id": "123",
            "energiaNecessariaKWh": body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": body.tempoDeslocacaoMin,
            "idArmazemOrigem": body.idArmazemOrigem,
            "idArmazemDestino": body.idArmazemDestino,
            "distanciaEntreArmazens": body.distanciaEntreArmazens,
        },{
            "id": "321",
            "energiaNecessariaKWh": 30,
            "tempoDeslocacaoMin": 30,
            "idArmazemOrigem": "003",
            "idArmazemDestino": "001",
            "distanciaEntreArmazens": 30,
        },{
            "id": "322",
            "energiaNecessariaKWh": 40,
            "tempoDeslocacaoMin": 50,
            "idArmazemOrigem": "002",
            "idArmazemDestino": "001",
            "distanciaEntreArmazens": 10,
        }
    ]);

    const stub2=sinon.stub(caminhoRepoInstance, "listarTodosCaminhos").returns([{
        "id": "123",
        "energiaNecessariaKWh": body.energiaNecessariaKWh,
        "tempoDeslocacaoMin": body.tempoDeslocacaoMin,
        "idArmazemOrigem": body.idArmazemOrigem,
        "idArmazemDestino": body.idArmazemDestino,
        "distanciaEntreArmazens": body.distanciaEntreArmazens,
    },{
        "id": "321",
        "energiaNecessariaKWh": 30,
        "tempoDeslocacaoMin": 30,
        "idArmazemOrigem": "003",
        "idArmazemDestino": "001",
        "distanciaEntreArmazens": 30,
    },{
        "id": "322",
        "energiaNecessariaKWh": 40,
        "tempoDeslocacaoMin": 50,
        "idArmazemOrigem": "002",
        "idArmazemDestino": "001",
        "distanciaEntreArmazens": 10,
    },{
        "id": "321",
        "energiaNecessariaKWh": 30,
        "tempoDeslocacaoMin": 30,
        "idArmazemOrigem": "003",
        "idArmazemDestino": "001",
        "distanciaEntreArmazens": 30,
    },{
        "id": "321",
        "energiaNecessariaKWh": 30,
        "tempoDeslocacaoMin": 30,
        "idArmazemOrigem": "003",
        "idArmazemDestino": "001",
        "distanciaEntreArmazens": 30,
    },{
        "id": "321",
        "energiaNecessariaKWh": 30,
        "tempoDeslocacaoMin": 30,
        "idArmazemOrigem": "003",
        "idArmazemDestino": "001",
        "distanciaEntreArmazens": 30,
    }
]);

        const ctrl = new CaminhoController(caminhoServiceInstance as ICaminhoService);

        await ctrl.listarTodosCaminhosPaginacao(<Request>req, <Response>res, <NextFunction>next);
    
        sinon.assert.calledOnce(stub);
        sinon.assert.calledOnce(stub2);

        stub.restore();
        stub2.restore();
    }));



    it('deleteById: returns json with object values', test( async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let req: Partial<Request> = {};
        let param = {
            "id": "123"
        }
        req.params = param;

        let res: Partial<Response> = {};
        let next: Partial<NextFunction> = () => { };

        const caminho = CaminhoMap.toDomain(body);
        
        const stub=sinon.stub(caminhoRepoInstance, "deleteById").returns(caminho);

        const ctrl = new CaminhoController(caminhoServiceInstance as ICaminhoService);

        await ctrl.deleteById(<Request>req, <Response>res, <NextFunction>next);
    
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(
            stub,
            sinon.match("123")
        );

        stub.restore();
    }));

});