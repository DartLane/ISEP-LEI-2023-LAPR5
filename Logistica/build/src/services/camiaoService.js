"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../config"));
const camiao_1 = require("../domain/camiao/camiao");
const Result_1 = require("../core/logic/Result");
const CamiaoMap_1 = require("../mappers/CamiaoMap");
const camiaoMatricula_1 = require("../domain/camiao/camiaoMatricula");
const camiaoTara_1 = require("../domain/camiao/camiaoTara");
const camiaoCapacidadeCarga_1 = require("../domain/camiao/camiaoCapacidadeCarga");
const camiaoCargaTotalBaterias_1 = require("../domain/camiao/camiaoCargaTotalBaterias");
const camiaoAutonomia_1 = require("../domain/camiao/camiaoAutonomia");
const camiaoTempoRecarregamento_1 = require("../domain/camiao/camiaoTempoRecarregamento");
let CamiaoService = class CamiaoService {
    constructor(camiaoRepo) {
        this.camiaoRepo = camiaoRepo;
    }
    async getCamiao(camiaoId) {
        try {
            const Camiao = await this.camiaoRepo.findById(camiaoId);
            if (Camiao === null) {
                return Result_1.Result.fail("Camiao not found");
            }
            else {
                const CamiaoDTOResult = CamiaoMap_1.CamiaoMap.toDTO(Camiao);
                return Result_1.Result.ok(CamiaoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async createCamiao(camiaoDTO) {
        try {
            const CamiaoOrError = await camiao_1.Camiao.create({
                matricula: camiaoMatricula_1.CamiaoMatricula.create(camiaoDTO.matricula).getValue(),
                tara: camiaoTara_1.CamiaoTara.create(camiaoDTO.tara).getValue(),
                capacidadeCarga: camiaoCapacidadeCarga_1.CamiaoCapacidadeCarga.create(camiaoDTO.capacidadeCarga).getValue(),
                cargaTotalBaterias: camiaoCargaTotalBaterias_1.CamiaoCargaTotalBaterias.create(camiaoDTO.cargaTotalBaterias).getValue(),
                autonomia: camiaoAutonomia_1.CamiaoAutonomia.create(camiaoDTO.autonomia).getValue(),
                tempoRecarregamento: camiaoTempoRecarregamento_1.CamiaoTempoRecarregamento.create(camiaoDTO.tempoRecarregamento).getValue(),
            });
            if (CamiaoOrError.isFailure) {
                return Result_1.Result.fail(CamiaoOrError.errorValue());
            }
            const CamiaoResult = CamiaoOrError.getValue();
            await this.camiaoRepo.save(CamiaoResult);
            const CamiaoDTOResult = CamiaoMap_1.CamiaoMap.toDTO(CamiaoResult);
            return Result_1.Result.ok(CamiaoDTOResult);
        }
        catch (e) {
            throw e;
        }
    }
    async updateCamiao(camiaoDTO) {
        try {
            const camiao = await this.camiaoRepo.findById(camiaoDTO.id);
            if (camiao === null) {
                return Result_1.Result.fail("Camiao not found");
            }
            else {
                camiao.tara = camiaoTara_1.CamiaoTara.create(camiaoDTO.tara).getValue();
                camiao.capacidadeCarga = camiaoCapacidadeCarga_1.CamiaoCapacidadeCarga.create(camiaoDTO.capacidadeCarga).getValue();
                camiao.cargaTotalBaterias = camiaoCargaTotalBaterias_1.CamiaoCargaTotalBaterias.create(camiaoDTO.cargaTotalBaterias).getValue();
                camiao.autonomia = camiaoAutonomia_1.CamiaoAutonomia.create(camiaoDTO.autonomia).getValue();
                camiao.tempoRecarregamento = camiaoTempoRecarregamento_1.CamiaoTempoRecarregamento.create(camiaoDTO.tempoRecarregamento).getValue();
                await this.camiaoRepo.save(camiao);
                const camiaoDTOResult = CamiaoMap_1.CamiaoMap.toDTO(camiao);
                return Result_1.Result.ok(camiaoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async partialUpdateCamiao(camiaoDTO) {
        try {
            const camiao = await this.camiaoRepo.findById(camiaoDTO.id);
            if (camiao === null) {
                return Result_1.Result.fail("Camiao not found");
            }
            else {
                if (camiaoDTO.tara)
                    camiao.tara = camiaoTara_1.CamiaoTara.create(camiaoDTO.tara).getValue();
                if (camiaoDTO.capacidadeCarga)
                    camiao.capacidadeCarga = camiaoCapacidadeCarga_1.CamiaoCapacidadeCarga.create(camiaoDTO.capacidadeCarga).getValue();
                if (camiaoDTO.cargaTotalBaterias)
                    camiao.cargaTotalBaterias = camiaoCargaTotalBaterias_1.CamiaoCargaTotalBaterias.create(camiaoDTO.cargaTotalBaterias).getValue();
                if (camiaoDTO.autonomia)
                    camiao.autonomia = camiaoAutonomia_1.CamiaoAutonomia.create(camiaoDTO.autonomia).getValue();
                if (camiaoDTO.tempoRecarregamento)
                    camiao.tempoRecarregamento = camiaoTempoRecarregamento_1.CamiaoTempoRecarregamento.create(camiaoDTO.tempoRecarregamento).getValue();
                await this.camiaoRepo.save(camiao);
                const camiaoDTOResult = CamiaoMap_1.CamiaoMap.toDTO(camiao);
                return Result_1.Result.ok(camiaoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async getById(id) {
        try {
            const camiao = await this.camiaoRepo.findById(id);
            if (camiao === null) {
                return Result_1.Result.fail("Camiao not found");
            }
            else {
                const camiaoDTOResult = CamiaoMap_1.CamiaoMap.toDTO(camiao);
                return Result_1.Result.ok(camiaoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async getByMatricula(matricula) {
        try {
            const camiao = await this.camiaoRepo.getByMatricula(matricula);
            if (camiao === null) {
                return Result_1.Result.fail("Camiao not found");
            }
            else {
                const camiaoDTOResult = CamiaoMap_1.CamiaoMap.toDTO(camiao);
                return Result_1.Result.ok(camiaoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async getAll() {
        try {
            const camioes = await this.camiaoRepo.getAll();
            if (camioes === null) {
                return Result_1.Result.fail("Camiao não encontrado");
            }
            else {
                let camioesResult = [];
                camioes.forEach(function (camiao) {
                    camioesResult.push(CamiaoMap_1.CamiaoMap.toDTO(camiao));
                });
                return Result_1.Result.ok(camioesResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async getAllInibidos() {
        try {
            const camioes = await this.camiaoRepo.getCamioesInibidos();
            if (camioes === null) {
                return Result_1.Result.fail("Não existem camiões inibidos");
            }
            else {
                let camioesResult = [];
                camioes.forEach(function (camiao) {
                    camioesResult.push(CamiaoMap_1.CamiaoMap.toDTO(camiao));
                });
                return Result_1.Result.ok(camioesResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async deleteById(id) {
        try {
            const caminho = await this.camiaoRepo.deleteById(id);
            if (caminho === null) {
                return Result_1.Result.fail("Nao existe camiao com esse id.");
            }
            else {
                const caminhoDTOResult = CamiaoMap_1.CamiaoMap.toDTO(caminho);
                return Result_1.Result.ok(caminhoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async deleteByMatricula(matricula) {
        try {
            const camiaoDelete = await this.camiaoRepo.deleteByMatricula(matricula);
            if (camiaoDelete === null) {
                return Result_1.Result.fail("Nao existe camiao com essa matricula.");
            }
            else {
                const camiaoDTOResult = CamiaoMap_1.CamiaoMap.toDTO(camiaoDelete);
                return Result_1.Result.ok(camiaoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async softDeleteCamiao(matricula) {
        try {
            const camiaoDelete = await this.camiaoRepo.softDeleteCamiao(matricula);
            if (camiaoDelete === null) {
                return Result_1.Result.fail("Nao existe camiao com essa matricula.");
            }
            else {
                const camiaoDTOResult = CamiaoMap_1.CamiaoMap.toDTO(camiaoDelete);
                return Result_1.Result.ok(camiaoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async restaureSoftDeleteCamiao(matricula) {
        try {
            const camiaoDelete = await this.camiaoRepo.restaureSoftDeleteCamiao(matricula);
            if (camiaoDelete === null) {
                return Result_1.Result.fail("Nao existe camiao com essa matricula.");
            }
            else {
                const camiaoDTOResult = CamiaoMap_1.CamiaoMap.toDTO(camiaoDelete);
                return Result_1.Result.ok(camiaoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
};
CamiaoService = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)(config_1.default.repos.camiao.name)),
    __metadata("design:paramtypes", [Object])
], CamiaoService);
exports.default = CamiaoService;
//# sourceMappingURL=camiaoService.js.map