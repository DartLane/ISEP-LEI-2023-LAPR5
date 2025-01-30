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
const Caminho_1 = require("../domain/caminho/Caminho");
const Result_1 = require("../core/logic/Result");
const CaminhoMap_1 = require("../mappers/CaminhoMap");
const CaminhoEnergiaNecessariaKWh_1 = require("../domain/caminho/CaminhoEnergiaNecessariaKWh");
const CaminhoTempoDeslocacaoMin_1 = require("../domain/caminho/CaminhoTempoDeslocacaoMin");
const CaminhoDistanciaArmazens_1 = require("../domain/caminho/CaminhoDistanciaArmazens");
let CaminhoService = class CaminhoService {
    constructor(CaminhoRepo, ArmazemRepo) {
        this.CaminhoRepo = CaminhoRepo;
        this.ArmazemRepo = ArmazemRepo;
    }
    async createCaminho(CaminhoDTO) {
        try {
            const CaminhoOrError = await Caminho_1.Caminho.create({
                energiaNecessariaKWh: CaminhoEnergiaNecessariaKWh_1.CaminhoEnergiaNecessariaKWh.create(CaminhoDTO.energiaNecessariaKWh).getValue(),
                tempoDeslocacaoMin: CaminhoTempoDeslocacaoMin_1.CaminhoTempoDeslocacaoMin.create(CaminhoDTO.tempoDeslocacaoMin).getValue(),
                distanciaEntreArmazens: CaminhoDistanciaArmazens_1.CaminhoDistanciaArmazens.create(CaminhoDTO.distanciaEntreArmazens).getValue(),
                idArmazemDestino: CaminhoDTO.idArmazemDestino,
                idArmazemOrigem: CaminhoDTO.idArmazemOrigem
            });
            if (CaminhoOrError.isFailure) {
                return Result_1.Result.fail(CaminhoOrError.errorValue());
            }
            const CaminhoResult = CaminhoOrError.getValue();
            await this.CaminhoRepo.save(CaminhoResult);
            const CaminhoDTOResult = CaminhoMap_1.CaminhoMap.toDTO(CaminhoResult);
            return Result_1.Result.ok(CaminhoDTOResult);
        }
        catch (e) {
            throw e;
        }
    }
    async updateCaminho(caminhoDTO, id) {
        try {
            const caminho = await this.CaminhoRepo.findByDomainId(id);
            if (caminho === null) {
                return Result_1.Result.fail("Caminho not found");
            }
            else {
                this.checkArmazemId(caminhoDTO.idArmazemDestino);
                this.checkArmazemId(caminhoDTO.idArmazemOrigem);
                //caminho.name = caminhoDTO.name;
                caminho.distanciaEntreArmazens = CaminhoDistanciaArmazens_1.CaminhoDistanciaArmazens.create(caminhoDTO.distanciaEntreArmazens).getValue();
                caminho.tempoDeslocacaoMin = CaminhoTempoDeslocacaoMin_1.CaminhoTempoDeslocacaoMin.create(caminhoDTO.tempoDeslocacaoMin).getValue();
                caminho.energiaNecessariaKWh = CaminhoEnergiaNecessariaKWh_1.CaminhoEnergiaNecessariaKWh.create(caminhoDTO.energiaNecessariaKWh).getValue();
                caminho.idArmazemDestino = caminhoDTO.idArmazemDestino;
                caminho.idArmazemOrigem = caminhoDTO.idArmazemOrigem;
                await this.CaminhoRepo.save(caminho);
                const caminhoDTOResult = CaminhoMap_1.CaminhoMap.toDTO(caminho);
                return Result_1.Result.ok(caminhoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async partialUpdateCaminho(caminhoDTO, id) {
        try {
            const caminho = await this.CaminhoRepo.findByDomainId(id);
            if (caminho === null) {
                return Result_1.Result.fail("Caminho not found");
            }
            else {
                //caminho.name = caminhoDTO.name;
                if (caminhoDTO.distanciaEntreArmazens)
                    caminho.distanciaEntreArmazens = CaminhoDistanciaArmazens_1.CaminhoDistanciaArmazens.create(caminhoDTO.distanciaEntreArmazens).getValue();
                if (caminhoDTO.tempoDeslocacaoMin)
                    caminho.tempoDeslocacaoMin = CaminhoTempoDeslocacaoMin_1.CaminhoTempoDeslocacaoMin.create(caminhoDTO.tempoDeslocacaoMin).getValue();
                if (caminhoDTO.energiaNecessariaKWh)
                    caminho.energiaNecessariaKWh = CaminhoEnergiaNecessariaKWh_1.CaminhoEnergiaNecessariaKWh.create(caminhoDTO.energiaNecessariaKWh).getValue();
                if (caminhoDTO.idArmazemDestino) {
                    this.checkArmazemId(caminhoDTO.idArmazemDestino);
                    caminho.idArmazemDestino = caminhoDTO.idArmazemDestino;
                }
                ;
                if (caminhoDTO.idArmazemOrigem) {
                    this.checkArmazemId(caminhoDTO.idArmazemOrigem);
                    caminho.idArmazemOrigem = caminhoDTO.idArmazemOrigem;
                }
                await this.CaminhoRepo.save(caminho);
                const caminhoDTOResult = CaminhoMap_1.CaminhoMap.toDTO(caminho);
                return Result_1.Result.ok(caminhoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async checkArmazemId(id) {
        const r = await this.ArmazemRepo.exists(id);
        return r;
    }
    async getById(id) {
        try {
            const caminho = await this.CaminhoRepo.findByDomainId(id);
            if (caminho === null) {
                return Result_1.Result.fail("Caminho not found");
            }
            else {
                const caminhoDTOResult = CaminhoMap_1.CaminhoMap.toDTO(caminho);
                return Result_1.Result.ok(caminhoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async listarTodosCaminhos() {
        try {
            const caminhos = await this.CaminhoRepo.listarTodosCaminhos();
            if (caminhos === null) {
                return Result_1.Result.fail("Sem Caminhos");
            }
            else {
                let caminhosResult = [];
                caminhos.forEach(function (caminho) {
                    caminhosResult.push(CaminhoMap_1.CaminhoMap.toDTO(caminho));
                });
                return Result_1.Result.ok(caminhosResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async listarPorIdArmazemOrigem(idArmazemOrigem) {
        try {
            const caminhos = await this.CaminhoRepo.listarPorIdArmazemOrigem(idArmazemOrigem);
            if (caminhos === null) {
                return Result_1.Result.fail("Caminhos not found");
            }
            else {
                let caminhosResult = [];
                caminhos.forEach(function (caminho) {
                    caminhosResult.push(CaminhoMap_1.CaminhoMap.toDTO(caminho));
                });
                return Result_1.Result.ok(caminhosResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async listarPorIdArmazemDestino(idArmazemDestino) {
        try {
            const caminhos = await this.CaminhoRepo.listarPorIdArmazemDestino(idArmazemDestino);
            if (caminhos === null) {
                return Result_1.Result.fail("Caminhos not found");
            }
            else {
                let caminhosResult = [];
                caminhos.forEach(function (caminho) {
                    caminhosResult.push(CaminhoMap_1.CaminhoMap.toDTO(caminho));
                });
                return Result_1.Result.ok(caminhosResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async deleteById(id) {
        try {
            const caminho = await this.CaminhoRepo.deleteById(id);
            if (caminho === null) {
                return Result_1.Result.fail("Nao existe caminho com esse id.");
            }
            else {
                const caminhoDTOResult = CaminhoMap_1.CaminhoMap.toDTO(caminho);
                return Result_1.Result.ok(caminhoDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
};
CaminhoService = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)(config_1.default.repos.caminho.name)),
    __param(1, (0, typedi_1.Inject)(config_1.default.repos.armazem.name)),
    __metadata("design:paramtypes", [Object, Object])
], CaminhoService);
exports.default = CaminhoService;
//# sourceMappingURL=caminhoService.js.map