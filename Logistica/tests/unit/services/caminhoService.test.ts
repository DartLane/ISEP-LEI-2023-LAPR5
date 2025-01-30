import * as sinon from 'sinon';

import { Response, Request, NextFunction } from 'express';

import { Container } from 'typedi';
import config from "../../../config";

import { Result } from '../../../src/core/logic/Result';

import ICaminhoDTO from '../../../src/dto/ICaminhoDTO';
import CaminhoService from '../../../src/services/caminhoService';
import { Caminho } from '../../../src/domain/caminho/Caminho';
import ICaminhoRepo from '../../../src/services/IRepos/ICaminhoRepo';
import { CaminhoMap } from '../../../src/mappers/CaminhoMap';
import IArmazemRepo from '../../../src/services/IRepos/IArmazemRepo';

var sinonTest = require("sinon-test");
var test = sinonTest(sinon);

describe('caminho service', function () {
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


    it('createCaminho: returns caminho dto', test( async function () {
        const body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        } as ICaminhoDTO;

        const result = CaminhoMap.toDomain(body);
        const stub=sinon.stub(caminhoRepoInstance, "save").returns(result);
        
        const serv = new CaminhoService(caminhoRepoInstance as ICaminhoRepo, armazemRepoInstance as IArmazemRepo);

        const res = (await serv.createCaminho(body)).getValue();

        sinon.assert.calledOnce(stub);
        sinon.assert.match(res, body);

        stub.restore();
    }));


    it('updateCaminho: returns caminho dto', test( async function () {
        const body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        } as ICaminhoDTO;

        const id="123";

        const body2 = {
            "energiaNecessariaKWh": 10,
            "tempoDeslocacaoMin": 20,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'bbb',
            "distanciaEntreArmazens": 15
        } as ICaminhoDTO;

        const toUpdate = CaminhoMap.toDomain(body);
        const stub=sinon.stub(caminhoRepoInstance, "findByDomainId").returns(toUpdate);
        const stub2=sinon.stub(caminhoRepoInstance, "save");
        const stub3=sinon.stub(armazemRepoInstance, "exists").returns(true);
        
        const serv = new CaminhoService(caminhoRepoInstance as ICaminhoRepo, armazemRepoInstance as IArmazemRepo);

        const res = (await serv.updateCaminho(body2,id)).getValue();

        sinon.assert.calledOnce(stub);
        sinon.assert.calledOnce(stub2);
        sinon.assert.match(res, body2);

        stub.restore();
        stub2.restore();
        stub3.restore();
    }));


    it('partialUpdateCaminho: returns caminho dto', test( async function () {
        const body = {
            "energiaNecessariaKWh": 10,
            "tempoDeslocacaoMin": 20,
            "idArmazemOrigem": 'xxx',
        } as ICaminhoDTO;

        const id="123";

        const body2 = {
            "energiaNecessariaKWh": 10,
            "tempoDeslocacaoMin": 20,
            "idArmazemOrigem": 'xxx',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        } as ICaminhoDTO;

        const bodyGet = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        } as ICaminhoDTO;

        const toUpdate = CaminhoMap.toDomain(bodyGet);
        const stub=sinon.stub(caminhoRepoInstance, "findByDomainId").returns(toUpdate);
        const stub2=sinon.stub(caminhoRepoInstance, "save");
        const stub3=sinon.stub(armazemRepoInstance, "exists").returns(true);
        
        const serv = new CaminhoService(caminhoRepoInstance as ICaminhoRepo, armazemRepoInstance as IArmazemRepo);

        const res = (await serv.partialUpdateCaminho(body,id)).getValue();

        sinon.assert.calledOnce(stub);
        sinon.assert.calledOnce(stub2);
        sinon.assert.match(res, body2);

        stub.restore();
        stub2.restore();
        stub3.restore();
    }));


    it('checkArmazemId: returns caminho dto', test( async function () {
        
        const id = "123";

        const stub=sinon.stub(armazemRepoInstance, "exists").returns(true);
        
        const serv = new CaminhoService(caminhoRepoInstance as ICaminhoRepo, armazemRepoInstance as IArmazemRepo);

        const res = (await serv.checkArmazemId(id));

        sinon.assert.calledOnce(stub);
        sinon.assert.match(res, true);

        stub.restore();
    }));


    it('getById: returns caminho dto', test( async function () {
        const body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        } as ICaminhoDTO;

        const id="123";

        const caminho = CaminhoMap.toDomain(body);
        const stub=sinon.stub(caminhoRepoInstance, "findByDomainId").returns(caminho);
        
        const serv = new CaminhoService(caminhoRepoInstance as ICaminhoRepo, armazemRepoInstance as IArmazemRepo);

        const res = (await serv.getById(id)).getValue();

        sinon.assert.calledOnce(stub);
        sinon.assert.match(res, body);

        stub.restore();
    }));


    it('listarTodosCaminhos: returns caminho dto', test( async function () {
        const body = {
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

        const caminho = CaminhoMap.toDomain(body);
        const caminho2 = CaminhoMap.toDomain(body2);
        const stub=sinon.stub(caminhoRepoInstance, "listarTodosCaminhos").returns([caminho,caminho2]);
        
        const serv = new CaminhoService(caminhoRepoInstance as ICaminhoRepo, armazemRepoInstance as IArmazemRepo);

        //const res = (await serv.listarTodosCaminhos()).getValue();

        //sinon.assert.calledOnce(stub);
        //sinon.assert.match(res, body);

        stub.restore();
    }));


    it('listarPorIdArmazemOrigem: returns caminho dto', test( async function () {
        const body = {
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

        const idArmazemOrigem="123";

        const caminho = CaminhoMap.toDomain(body);
        const caminho2 = CaminhoMap.toDomain(body2);
        const stub=sinon.stub(caminhoRepoInstance, "listarPorIdArmazemOrigem").returns([caminho,caminho2]);
        
        const serv = new CaminhoService(caminhoRepoInstance as ICaminhoRepo, armazemRepoInstance as IArmazemRepo);

        //const res = (await serv.listarPorIdArmazemOrigem(idArmazemOrigem)).getValue();

        //sinon.assert.calledOnce(stub);
        //sinon.assert.match(res, body);

        stub.restore();
    }));


    it('listarPorIdArmazemDestino: returns caminho dto', test( async function () {
        const body = {
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

        const idArmazemDestino="123";

        const caminho = CaminhoMap.toDomain(body);
        const caminho2 = CaminhoMap.toDomain(body2);
        const stub=sinon.stub(caminhoRepoInstance, "listarPorIdArmazemDestino").returns([caminho,caminho2]);
        
        const serv = new CaminhoService(caminhoRepoInstance as ICaminhoRepo, armazemRepoInstance as IArmazemRepo);

        //const res = (await serv.listarPorIdArmazemDestino(idArmazemDestino)).getValue();

        //sinon.assert.calledOnce(stub);
        //sinon.assert.match(res, body);

        stub.restore();
    }));


    it('deleteById: returns caminho dto', test( async function () {
        const body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        } as ICaminhoDTO;

        const id="123";

        const caminho = CaminhoMap.toDomain(body);
        const stub=sinon.stub(caminhoRepoInstance, "deleteById").returns(caminho);
        
        const serv = new CaminhoService(caminhoRepoInstance as ICaminhoRepo, armazemRepoInstance as IArmazemRepo);

        const res = (await serv.deleteById(id)).getValue();

        sinon.assert.calledOnce(stub);
        sinon.assert.match(res, body);

        stub.restore();
    }));

});