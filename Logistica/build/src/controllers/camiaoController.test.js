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
const camiaoController_1 = __importDefault(require("./camiaoController"));
describe('camiao controller', function () {
    beforeEach(function () {
    });
    it('createCamiao: returns json with id+name values', async function () {
        let body = {
            matricula: 'AA-11-BB',
            tara: 200,
            capacidadeCarga: 100,
            cargaTotalBaterias: 20,
            autonomia: 15,
            tempoRecarregamento: 20,
        };
        let req = {};
        req.body = body;
        let res = {
            json: sinon.spy()
        };
        let next = () => { };
        let camiaoServiceClass = require(config_1.default.services.camiao.path).default;
        let camiaoServiceInstance = typedi_1.Container.get(camiaoServiceClass);
        typedi_1.Container.set(config_1.default.services.camiao.name, camiaoServiceInstance);
        camiaoServiceClass = typedi_1.Container.get(config_1.default.services.camiao.name);
        const mock = sinon.stub(camiaoServiceClass, 'createCamiao').returns(Result_1.Result.ok({
            id: req.body.id,
            matricula: req.body.matricula,
            tara: req.body.tara,
            capacidadeCarga: req.body.capacidadeCarga,
            cargaTotalBaterias: req.body.cargaTotalBaterias,
            autonomia: req.body.autonomia,
            tempoRecarregamento: req.body.tempoRecarregamento,
        }));
        const ctrl = new camiaoController_1.default(camiaoServiceClass);
        await ctrl.createCamiao(req, res, next);
        sinon.assert.calledOnce(res.json);
        sinon.assert.calledWith(mock, sinon.match({
            matricula: req.body.matricula,
            tara: req.body.tara,
            capacidadeCarga: req.body.capacidadeCarga,
            cargaTotalBaterias: req.body.cargaTotalBaterias,
            autonomia: req.body.autonomia,
            tempoRecarregamento: req.body.tempoRecarregamento,
        }));
        mock.restore();
    });
    it('GetAllCamioes: returns json with the values of Camiao using getAll', async function () {
        let body1 = {
            id: "rgrgrg",
            matricula: "ER-21-AA",
            tara: 20,
            capacidadeCarga: 500,
            cargaTotalBaterias: 2123,
            autonomia: 114,
            tempoRecarregamento: 67
        };
        let req1 = {};
        req1.body = body1;
        let res1 = {};
        let req2 = {};
        req2.body = "";
        let res2 = {
            json: sinon.spy()
        };
        let next = () => { };
        let camiaoSchemaInstance = require("../persistence/schemas/camiaoSchema").default;
        typedi_1.Container.set("camiaoSchema", camiaoSchemaInstance);
        let camiaoRepoClass = require("../repos/camiaoRepo").default;
        let camiaoRepoInstance = typedi_1.Container.get(camiaoRepoClass);
        typedi_1.Container.set("camiaoRepo", camiaoRepoInstance);
        let camiaoServiceClass = require("../services/camiaoService").default;
        let camiaoServiceInstance = typedi_1.Container.get(camiaoServiceClass);
        typedi_1.Container.set("camiaoService", camiaoServiceInstance);
        camiaoServiceInstance = typedi_1.Container.get("camiaoService");
        const mock = sinon.stub(camiaoServiceInstance, "getAll").returns(Result_1.Result.ok([{ id: "rgrgrg", matricula: "ER-21-AA",
                tara: 20,
                capacidadeCarga: 500,
                cargaTotalBaterias: 2123,
                autonomia: 114,
                tempoRecarregamento: 67 }]));
        const ctrl = new camiaoController_1.default(camiaoServiceInstance);
        await ctrl.getAll(req2, res2, next);
        /*sinon.assert.calledOnce(mock);
        sinon.assert.calledWith(mock, sinon.match({"matricula": "ER-21-AA",
        "tara": 20,
        "capacidade": 500,
        "cargaBateria": 2123,
        "autonomia": 114,
        "tempoCarregamentoRapido": 67}));
        /*const expected = [body1];
        console.log("1");
        console.log(result);*/
        //sinon.assert.match(body1, res2);
        sinon.assert.calledOnce(mock);
        sinon.assert.calledWith(mock);
        mock.restore();
    });
    it('returns json with the values of Camiao using GetByMatricula', async function () {
        let body1 = {
            id: "12345678",
            matricula: "ER-21-AA",
            tara: 20,
            capacidadeCarga: 500,
            cargaTotalBaterias: 2123,
            autonomia: 114,
            tempoRecarregamento: 67
        };
        let body2 = {
            matricula: "BB-21-AA",
            tara: 20,
            capacidadeCarga: 500,
            cargaTotalBaterias: 2123,
            autonomia: 114,
            tempoRecarregamento: 67
        };
        let req1 = {};
        req1.body = body1;
        let req2 = {};
        req2.body = body2;
        let req3 = {};
        let param = {
            "matricula": "ER-21-AA"
        };
        req3.params = param;
        let res1 = {};
        let res2 = {};
        let res3 = {
            json: sinon.spy()
        };
        let next = () => { };
        let camiaoSchemaInstance = require("../persistence/schemas/camiaoSchema").default;
        typedi_1.Container.set("camiaoSchema", camiaoSchemaInstance);
        let camiaoRepoClass = require("../repos/camiaoRepo").default;
        let camiaoRepoInstance = typedi_1.Container.get(camiaoRepoClass);
        typedi_1.Container.set(config_1.default.repos.camiao.name, camiaoRepoInstance);
        let camiaoServiceClass = require("../services/camiaoService").default;
        let camiaoServiceInstance = typedi_1.Container.get(camiaoServiceClass);
        typedi_1.Container.set(config_1.default.services.camiao.name, camiaoServiceInstance);
        camiaoServiceInstance = typedi_1.Container.get("camiaoService");
        const mock = sinon.stub(camiaoServiceInstance, "getByMatricula").returns(Result_1.Result.ok({ id: req1.body.id, matricula: req1.body.matricula,
            tara: req1.body.tara,
            capacidadeCarga: req1.body.capacidadeCarga,
            cargaTotalBaterias: req1.body.cargaTotalBaterias,
            autonomia: req1.body.autonomia,
            tempoRecarregamento: req1.body.tempoRecarregamento }));
        const ctrl = new camiaoController_1.default(camiaoServiceInstance);
        //await ctrl.createCamiao(<Request>req1, <Response>res1, <NextFunction>next);
        //await ctrl.createCamiao(<Request>req2, <Response>res2, <NextFunction>next);
        const result = await ctrl.getByMatricula(req3, res3, next);
        sinon.assert.calledOnce(mock);
        sinon.assert.calledWith(mock, sinon.match("ER-21-AA"));
        mock.restore();
    });
    it('returns json with the new values of Camiao using updateCamiao', async function () {
        let body = {
            id: "12345678",
            matricula: "BB-21-AA",
            tara: 20,
            capacidadeCarga: 500,
            cargaTotalBaterias: 2123,
            autonomia: 114,
            tempoRecarregamento: 67
        };
        let req = {};
        req.body = body;
        let param = {
            id: "12345678"
        };
        req.params = param;
        let res = {};
        let body2 = {
            id: "12345678",
            matricula: "BB-21-AA",
            tara: 45,
            capacidadeCarga: 70,
            cargaTotalBaterias: 2123,
            autonomia: 114,
            tempoRecarregamento: 67
        };
        let req2 = {};
        req2.body = body2;
        req2.params = param;
        let res2 = {
            json: sinon.spy()
        };
        let next = () => { };
        let camiaoSchemaInstance = require("../persistence/schemas/camiaoSchema").default;
        typedi_1.Container.set("camiaoSchema", camiaoSchemaInstance);
        let camiaoRepoClass = require("../repos/camiaoRepo").default;
        let camiaoRepoInstance = typedi_1.Container.get(camiaoRepoClass);
        typedi_1.Container.set(config_1.default.repos.camiao.name, camiaoRepoInstance);
        let camiaoServiceClass = require("../services/camiaoService").default;
        let camiaoServiceInstance = typedi_1.Container.get(camiaoServiceClass);
        typedi_1.Container.set(config_1.default.services.camiao.name, camiaoServiceInstance);
        camiaoServiceInstance = typedi_1.Container.get("camiaoService");
        const mock = sinon.stub(camiaoServiceInstance, "updateCamiao").returns(Result_1.Result.ok({ id: req2.body.id, matricula: req2.body.matricula,
            tara: req2.body.tara,
            capacidadeCarga: req2.body.capacidadeCarga,
            cargaTotalBaterias: req2.body.cargaTotalBaterias,
            autonomia: req2.body.autonomia,
            tempoRecarregamento: req2.body.tempoRecarregamento }));
        const ctrl = new camiaoController_1.default(camiaoServiceInstance);
        await ctrl.updateCamiao(req2, res2, next);
        sinon.assert.calledOnce(mock);
        sinon.assert.calledWith(mock, sinon.match({ id: req2.body.id, matricula: req2.body.matricula,
            tara: req2.body.tara,
            capacidadeCarga: req2.body.capacidadeCarga,
            cargaTotalBaterias: req2.body.cargaTotalBaterias,
            autonomia: req2.body.autonomia,
            tempoRecarregamento: req2.body.tempoRecarregamento }));
        mock.restore();
    });
    it('UpdatePartialCamiao: returns json with the new values of Camiao using updatePartialCamiao', async function () {
        let body = {
            matricula: "BB-21-AA",
            tara: 20,
            capacidade: 500,
        };
        let req = {};
        req.body = body;
        let param = {
            id: "12345"
        };
        req.params = param;
        let res = {};
        let body2 = {
            id: "12345",
            matricula: "BB-21-AA",
            tara: 45,
            capacidadeCarga: 70,
            cargaTotalBaterias: 2123,
            autonomia: 114,
            tempoRecarregamento: 67
        };
        let req2 = {};
        req2.body = body2;
        req2.params = param;
        let res2 = {
            json: sinon.spy()
        };
        let next = () => { };
        let camiaoSchemaInstance = require("../persistence/schemas/camiaoSchema").default;
        typedi_1.Container.set("camiaoSchema", camiaoSchemaInstance);
        let camiaoRepoClass = require("../repos/camiaoRepo").default;
        let camiaoRepoInstance = typedi_1.Container.get(camiaoRepoClass);
        typedi_1.Container.set(config_1.default.repos.camiao.name, camiaoRepoInstance);
        let camiaoServiceClass = require("../services/camiaoService").default;
        let camiaoServiceInstance = typedi_1.Container.get(camiaoServiceClass);
        typedi_1.Container.set(config_1.default.services.camiao.name, camiaoServiceInstance);
        camiaoServiceInstance = typedi_1.Container.get("camiaoService");
        const mock = sinon.stub(camiaoServiceInstance, "partialUpdateCamiao").returns(Result_1.Result.ok({ id: req2.body.Id, matricula: req2.body.matricula,
            tara: req.body.tara,
            capacidadeCarga: req.body.capacidadeCarga,
            cargaTotalBaterias: req2.body.cargaTotalBaterias,
            autonomia: req2.body.autonomia,
            tempoRecarregamento: req2.body.tempoRecarregamento }));
        const ctrl = new camiaoController_1.default(camiaoServiceInstance);
        await ctrl.partialUpdateCamiao(req2, res2, next);
        sinon.assert.calledOnce(mock);
        sinon.assert.calledWith(mock, sinon.match({ matricula: req2.body.matricula,
            tara: req2.body.tara,
            capacidadeCarga: req2.body.capacidadeCarga,
            cargaTotalBaterias: req2.body.cargaTotalBaterias,
            autonomia: req2.body.autonomia,
            tempoRecarregamento: req2.body.tempoRecarregamento }));
        mock.restore();
    });
});
//# sourceMappingURL=camiaoController.test.js.map