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
require("reflect-metadata");
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../config"));
const Result_1 = require("../core/logic/Result");
const camiaoService_1 = __importDefault(require("./camiaoService"));
const CamiaoMap_1 = require("../mappers/CamiaoMap");
describe('camiao service', function () {
    beforeEach(function () { });
    let camiaoSchemaClass = require("../persistence/schemas/camiaoSchema");
    typedi_1.Container.set('camiaoSchema', camiaoSchemaClass);
    let camiaoRepoClass = require("../repos/camiaoRepo").default;
    let camiaoRepoInstance = typedi_1.Container.get(camiaoRepoClass);
    typedi_1.Container.set(config_1.default.repos.camiao.name, camiaoRepoInstance);
    it('createCamiao : returns json with values', async function () {
        const body = {
            matricula: 'AA-11-BB',
            tara: 200,
            capacidadeCarga: 100,
            cargaTotalBaterias: 20,
            autonomia: 15,
            tempoRecarregamento: 20,
        };
        const resu = CamiaoMap_1.CamiaoMap.toDomain(body);
        camiaoRepoInstance = typedi_1.Container.get(config_1.default.repos.camiao.name);
        const mock = sinon.stub(camiaoRepoInstance, "save").returns(Result_1.Result.ok((await resu)));
        const serv = new camiaoService_1.default(camiaoRepoInstance);
        const res = await (await (await serv.createCamiao(body)).getValue());
        sinon.assert.match(res, body);
        mock.restore();
    });
    it('getByID : return Json with camiao', async function () {
        const body = {
            matricula: 'AA-11-BB',
            tara: 201,
            capacidadeCarga: 100,
            cargaTotalBaterias: 20,
            autonomia: 15,
            tempoRecarregamento: 20,
        };
        const resu = CamiaoMap_1.CamiaoMap.toDomain(body);
        camiaoRepoInstance = typedi_1.Container.get(config_1.default.repos.camiao.name);
        const mock = sinon.stub(camiaoRepoInstance, "findById").returns(resu);
        const serv = new camiaoService_1.default(camiaoRepoInstance);
        const res = await (await (await serv.getById((await resu).id.toString())).getValue());
        sinon.assert.match(res, body);
        mock.restore();
    });
    /*it('getByMatricula : return Json with camiao',async function()  {

        let body = {
            id:'',
            matricula: 'AA-11-BB',
            tara: 202,
            capacidadeCarga: 100,
            cargaTotalBaterias: 20,
            autonomia: 15,
            tempoRecarregamento: 20,
        } as ICamiaoDTO;

        const resu = CamiaoMap.toDomain(body);
        camiaoRepoInstance = Container.get(config.repos.camiao.name);
        const mock =sinon.stub(camiaoRepoInstance , "getByMatricula").returns(resu);
        
        const serv = new CamiaoService(camiaoRepoInstance as ICamiaoRepo);

        serv.createCamiao(body);

        const res = await (await (await serv.getByMatricula("AA-11-BB")));

        body.id = res.getValue().id;


        sinon.assert.match(res.getValue(), body);
        mock.restore();
        
    })*/
    /*it('getAll : return Json com todos os camioes',async function()  {

        let body = {
            matricula: 'AA-11-BB',
            tara: 203,
            capacidadeCarga: 100,
            cargaTotalBaterias: 20,
            autonomia: 15,
            tempoRecarregamento: 20,
        } as ICamiaoDTO;

        let body2 = {
            matricula: 'AB-11-BA',
            tara: 203,
            capacidadeCarga: 100,
            cargaTotalBaterias: 20,
            autonomia: 15,
            tempoRecarregamento: 20,
        } as ICamiaoDTO;

        const resu2 = await Camiao.create({
            matricula: CamiaoMatricula.create(body2.matricula).getValue(),
            tara: CamiaoTara.create(body2.tara).getValue(),
            capacidadeCarga: CamiaoCapacidadeCarga.create(body2.capacidadeCarga).getValue(),
            cargaTotalBaterias: CamiaoCargaTotalBaterias.create(body2.cargaTotalBaterias).getValue(),
            autonomia: CamiaoAutonomia.create(body2.autonomia).getValue(),
            tempoRecarregamento: CamiaoTempoRecarregamento.create(body2.tempoRecarregamento).getValue(),});

        const resu3 = await Camiao.create({
            matricula: CamiaoMatricula.create(body.matricula).getValue(),
            tara: CamiaoTara.create(body.tara).getValue(),
            capacidadeCarga: CamiaoCapacidadeCarga.create(body.capacidadeCarga).getValue(),
            cargaTotalBaterias: CamiaoCargaTotalBaterias.create(body.cargaTotalBaterias).getValue(),
            autonomia: CamiaoAutonomia.create(body.autonomia).getValue(),
            tempoRecarregamento: CamiaoTempoRecarregamento.create(body.tempoRecarregamento).getValue(),});
            

        camiaoRepoInstance = Container.get(config.repos.camiao.name);
        const mock = sinon.stub(camiaoRepoInstance , "getAll").returns(( [resu3.getValue(),resu2.getValue()]));
        
        const serv = new CamiaoService(camiaoRepoInstance as ICamiaoRepo);

        serv.createCamiao(body);
        serv.createCamiao(body2);

        const res = await (await (await serv.getAll()));

        body.id = res.getValue()[0].id;
        body2.id = res.getValue()[1].id;

        sinon.assert.match([res.getValue()[0], res.getValue()[1]], [body, body2]);
        mock.restore();
    })*/
    it('returns json with the values when updateCamiao', async function () {
        let body = {
            matricula: 'AA-11-BB',
            tara: 203,
            capacidadeCarga: 100,
            cargaTotalBaterias: 20,
            autonomia: 15,
            tempoRecarregamento: 20,
        };
        let body2 = {
            id: '',
            matricula: 'AA-11-BB',
            tara: 203,
            capacidadeCarga: 101,
            cargaTotalBaterias: 20,
            autonomia: 15,
            tempoRecarregamento: 20,
        };
        const resu = CamiaoMap_1.CamiaoMap.toDomain(body);
        const resu2 = CamiaoMap_1.CamiaoMap.toDomain(body2);
        camiaoRepoInstance = typedi_1.Container.get(config_1.default.repos.camiao.name);
        let mock = sinon.stub(camiaoRepoInstance, "findById").returns((resu));
        let mock2 = sinon.stub(camiaoRepoInstance, "save").returns(Result_1.Result.ok((await resu2)));
        const serv = new camiaoService_1.default(camiaoRepoInstance);
        serv.createCamiao(body);
        const result = await (await serv.updateCamiao(body2)).getValue();
        body2.id = result.id;
        sinon.assert.match(result, body2);
        mock.restore();
        mock2.restore();
    });
});
//# sourceMappingURL=camiaoServices.test.js.map