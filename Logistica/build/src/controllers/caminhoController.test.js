"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = __importStar(require("sinon"));
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../config"));
const Result_1 = require("../core/logic/Result");
const caminhoController_1 = __importDefault(require("./caminhoController"));
var sinonTest = require("sinon-test");
var test = sinonTest(sinon);
describe('caminho controller', function () {
    beforeEach(function () {
    });
    it('createCaminhho: returns json with object values', test(async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let req = {};
        req.body = body;
        let res = {
            json: this.spy()
        };
        let next = () => { };
        let caminhoServiceClass = require(config_1.default.services.caminho.path).default;
        typedi_1.Container.set(config_1.default.repos.caminho.name, "testCaminhoRepo");
        typedi_1.Container.set(config_1.default.repos.armazem.name, "testArmazemRepo");
        let caminhoServiceInstance = typedi_1.Container.get(caminhoServiceClass);
        typedi_1.Container.set(config_1.default.services.caminho.name, caminhoServiceInstance);
        caminhoServiceInstance = typedi_1.Container.get(config_1.default.services.caminho.name);
        const stub = this.stub(caminhoServiceInstance, 'createCaminho').returns(Result_1.Result.ok({
            "id": "123",
            "energiaNecessariaKWh": req.body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": req.body.tempoDeslocacaoMin,
            "idArmazemOrigem": req.body.idArmazemOrigem,
            "idArmazemDestino": req.body.idArmazemDestino,
            "distanciaEntreArmazens": req.body.distanciaEntreArmazens,
        }));
        const stub2 = this.stub(caminhoServiceInstance, 'checkArmazemId').returns(true);
        const ctrl = new caminhoController_1.default(caminhoServiceInstance);
        await ctrl.createCaminho(req, res, next);
        sinon.assert.calledOnce(res.json);
        sinon.assert.calledWith(stub, sinon.match({
            "energiaNecessariaKWh": req.body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": req.body.tempoDeslocacaoMin,
            "idArmazemOrigem": req.body.idArmazemOrigem,
            "idArmazemDestino": req.body.idArmazemDestino,
            "distanciaEntreArmazens": req.body.distanciaEntreArmazens,
        }));
    }));
    it('updateCaminho: returns json with object values', test(async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let req = {};
        req.body = body;
        let param = { "id": "123" };
        req.params = param;
        let res = {
            json: this.spy()
        };
        let next = () => { };
        let body2 = {
            "energiaNecessariaKWh": 10,
            "tempoDeslocacaoMin": 20,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'bbb',
            "distanciaEntreArmazens": 15
        };
        let req2 = {};
        req2.body = body2;
        let caminhoServiceClass = require(config_1.default.services.caminho.path).default;
        //Container.set(config.repos.caminho.name, "testCaminhoRepo");
        //Container.set(config.repos.armazem.name, "testArmazemRepo");
        let caminhoServiceInstance = typedi_1.Container.get(caminhoServiceClass);
        //Container.set(config.services.caminho.name, caminhoServiceInstance);
        caminhoServiceInstance = typedi_1.Container.get(config_1.default.services.caminho.name);
        const stub = this.stub(caminhoServiceInstance, 'updateCaminho').returns(Result_1.Result.ok({
            "id": "123",
            "energiaNecessariaKWh": req.body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": req.body.tempoDeslocacaoMin,
            "idArmazemOrigem": req.body.idArmazemOrigem,
            "idArmazemDestino": req.body.idArmazemDestino,
            "distanciaEntreArmazens": req.body.distanciaEntreArmazens,
        }));
        const stub2 = this.stub(caminhoServiceInstance, 'checkArmazemId').returns(true);
        const ctrl = new caminhoController_1.default(caminhoServiceInstance);
        await ctrl.updateCaminho(req, res, next);
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub, sinon.match({
            "energiaNecessariaKWh": req.body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": req.body.tempoDeslocacaoMin,
            "idArmazemOrigem": req.body.idArmazemOrigem,
            "idArmazemDestino": req.body.idArmazemDestino,
            "distanciaEntreArmazens": req.body.distanciaEntreArmazens,
        }));
    }));
    it('partialUpdateCaminho: returns json with object values', test(async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let req = {};
        req.body = body;
        let param = { "id": "123" };
        req.params = param;
        let res = {
            json: this.spy()
        };
        let next = () => { };
        let body2 = {
            "energiaNecessariaKWh": 10,
            "tempoDeslocacaoMin": 20,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'bbb',
            "distanciaEntreArmazens": 15
        };
        let req2 = {};
        req2.body = body2;
        let caminhoServiceClass = require(config_1.default.services.caminho.path).default;
        let caminhoServiceInstance = typedi_1.Container.get(caminhoServiceClass);
        caminhoServiceInstance = typedi_1.Container.get(config_1.default.services.caminho.name);
        const stub = this.stub(caminhoServiceInstance, 'partialUpdateCaminho').returns(Result_1.Result.ok({
            "id": "123",
            "energiaNecessariaKWh": req.body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": req2.body.tempoDeslocacaoMin,
            "idArmazemOrigem": req.body.idArmazemOrigem,
            "idArmazemDestino": req2.body.idArmazemDestino,
            "distanciaEntreArmazens": req.body.distanciaEntreArmazens,
        }));
        const stub2 = this.stub(caminhoServiceInstance, 'checkArmazemId').returns(true);
        const ctrl = new caminhoController_1.default(caminhoServiceInstance);
        await ctrl.partialUpdateCaminho(req, res, next);
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub, sinon.match({
            "energiaNecessariaKWh": req.body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": req.body.tempoDeslocacaoMin,
            "idArmazemOrigem": req.body.idArmazemOrigem,
            "idArmazemDestino": req.body.idArmazemDestino,
            "distanciaEntreArmazens": req.body.distanciaEntreArmazens,
        }));
    }));
    it('getById: returns json with object values', test(async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let req = {};
        let param = {
            "id": "123"
        };
        req.params = param;
        let res = {
            json: this.spy()
        };
        let next = () => { };
        let caminhoServiceClass = require(config_1.default.services.caminho.path).default;
        typedi_1.Container.set(config_1.default.repos.caminho.name, "testCaminhoRepo");
        let caminhoServiceInstance = typedi_1.Container.get(caminhoServiceClass);
        typedi_1.Container.set(config_1.default.services.caminho.name, caminhoServiceInstance);
        caminhoServiceInstance = typedi_1.Container.get(config_1.default.services.caminho.name);
        const stub = this.stub(caminhoServiceInstance, 'getById').returns(Result_1.Result.ok({
            "id": "123",
            "energiaNecessariaKWh": body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": body.tempoDeslocacaoMin,
            "idArmazemOrigem": body.idArmazemOrigem,
            "idArmazemDestino": body.idArmazemDestino,
            "distanciaEntreArmazens": body.distanciaEntreArmazens,
        }));
        const ctrl = new caminhoController_1.default(caminhoServiceInstance);
        await ctrl.getById(req, res, next);
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub, sinon.match("123"));
    }));
    it('listarTodosCaminhos: returns json with object values', test(async function () {
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
        let req = {};
        let res = {
            json: this.spy()
        };
        let next = () => { };
        let caminhoServiceClass = require(config_1.default.services.caminho.path).default;
        typedi_1.Container.set(config_1.default.repos.caminho.name, "listarTodosCaminhos");
        let caminhoServiceInstance = typedi_1.Container.get(caminhoServiceClass);
        typedi_1.Container.set(config_1.default.services.caminho.name, caminhoServiceInstance);
        caminhoServiceInstance = typedi_1.Container.get(config_1.default.services.caminho.name);
        const stub = this.stub(caminhoServiceInstance, 'listarTodosCaminhos').returns(Result_1.Result.ok([{
                "id": "123",
                "energiaNecessariaKWh": body.energiaNecessariaKWh,
                "tempoDeslocacaoMin": body.tempoDeslocacaoMin,
                "idArmazemOrigem": body.idArmazemOrigem,
                "idArmazemDestino": body.idArmazemDestino,
                "distanciaEntreArmazens": body.distanciaEntreArmazens,
            }, {
                "id": "321",
                "energiaNecessariaKWh": body2.energiaNecessariaKWh,
                "tempoDeslocacaoMin": body2.tempoDeslocacaoMin,
                "idArmazemOrigem": body2.idArmazemOrigem,
                "idArmazemDestino": body2.idArmazemDestino,
                "distanciaEntreArmazens": body2.distanciaEntreArmazens,
            }
        ]));
        const ctrl = new caminhoController_1.default(caminhoServiceInstance);
        await ctrl.listarTodosCaminhos(req, res, next);
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub);
    }));
    it('listarPorIdArmazemOrigem: returns json with object values', test(async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let req = {};
        let param = {
            "idArmazemOrigem": "aaa"
        };
        req.params = param;
        let res = {
            json: this.spy()
        };
        let next = () => { };
        let caminhoServiceClass = require(config_1.default.services.caminho.path).default;
        typedi_1.Container.set(config_1.default.repos.caminho.name, "testCaminhoRepo");
        let caminhoServiceInstance = typedi_1.Container.get(caminhoServiceClass);
        typedi_1.Container.set(config_1.default.services.caminho.name, caminhoServiceInstance);
        caminhoServiceInstance = typedi_1.Container.get(config_1.default.services.caminho.name);
        const stub = this.stub(caminhoServiceInstance, 'listarPorIdArmazemOrigem').returns(Result_1.Result.ok({
            "id": "123",
            "energiaNecessariaKWh": body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": body.tempoDeslocacaoMin,
            "idArmazemOrigem": body.idArmazemOrigem,
            "idArmazemDestino": body.idArmazemDestino,
            "distanciaEntreArmazens": body.distanciaEntreArmazens,
        }));
        const ctrl = new caminhoController_1.default(caminhoServiceInstance);
        await ctrl.listarPorIdArmazemOrigem(req, res, next);
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub, sinon.match("aaa"));
    }));
    it('listarPorIdArmazemDestino: returns json with object values', test(async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let req = {};
        let param = {
            "idArmazemDestino": "aaa"
        };
        req.params = param;
        let res = {
            json: this.spy()
        };
        let next = () => { };
        let caminhoServiceClass = require(config_1.default.services.caminho.path).default;
        typedi_1.Container.set(config_1.default.repos.caminho.name, "testCaminhoRepo");
        let caminhoServiceInstance = typedi_1.Container.get(caminhoServiceClass);
        typedi_1.Container.set(config_1.default.services.caminho.name, caminhoServiceInstance);
        caminhoServiceInstance = typedi_1.Container.get(config_1.default.services.caminho.name);
        const stub = this.stub(caminhoServiceInstance, 'listarPorIdArmazemDestino').returns(Result_1.Result.ok({
            "id": "123",
            "energiaNecessariaKWh": body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": body.tempoDeslocacaoMin,
            "idArmazemOrigem": body.idArmazemOrigem,
            "idArmazemDestino": body.idArmazemDestino,
            "distanciaEntreArmazens": body.distanciaEntreArmazens,
        }));
        const ctrl = new caminhoController_1.default(caminhoServiceInstance);
        await ctrl.listarPorIdArmazemDestino(req, res, next);
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub, sinon.match("aaa"));
    }));
    it('deleteById: returns json with object values', test(async function () {
        let body = {
            "energiaNecessariaKWh": 100,
            "tempoDeslocacaoMin": 200,
            "idArmazemOrigem": 'zzz',
            "idArmazemDestino": 'aaa',
            "distanciaEntreArmazens": 15
        };
        let req = {};
        let param = {
            "id": "aaa"
        };
        req.params = param;
        let res = {
            json: this.spy()
        };
        let next = () => { };
        let caminhoServiceClass = require(config_1.default.services.caminho.path).default;
        typedi_1.Container.set(config_1.default.repos.caminho.name, "testCaminhoRepo");
        let caminhoServiceInstance = typedi_1.Container.get(caminhoServiceClass);
        typedi_1.Container.set(config_1.default.services.caminho.name, caminhoServiceInstance);
        caminhoServiceInstance = typedi_1.Container.get(config_1.default.services.caminho.name);
        const stub = this.stub(caminhoServiceInstance, 'deleteById').returns(Result_1.Result.ok({
            "id": "123",
            "energiaNecessariaKWh": body.energiaNecessariaKWh,
            "tempoDeslocacaoMin": body.tempoDeslocacaoMin,
            "idArmazemOrigem": body.idArmazemOrigem,
            "idArmazemDestino": body.idArmazemDestino,
            "distanciaEntreArmazens": body.distanciaEntreArmazens,
        }));
        const ctrl = new caminhoController_1.default(caminhoServiceInstance);
        await ctrl.deleteById(req, res, next);
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub, sinon.match("aaa"));
    }));
});
//# sourceMappingURL=caminhoController.test.js.map