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
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const mongoose_1 = require("mongoose");
const CaminhoMap_1 = require("../mappers/CaminhoMap");
const caminhoId_1 = require("../domain/caminho/caminhoId");
let CaminhoRepo = class CaminhoRepo {
    constructor(CaminhoSchema) {
        this.CaminhoSchema = CaminhoSchema;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    async exists(caminho) {
        const idX = caminho.id instanceof caminhoId_1.caminhoId ? caminho.id.toValue() : caminho.id;
        const query = { domainId: idX };
        const caminhoDocument = await this.CaminhoSchema.findOne(query);
        return !!caminhoDocument === true;
    }
    async save(Caminho) {
        const query = { domainId: Caminho.id.toString() };
        const CaminhoDocument = await this.CaminhoSchema.findOne(query);
        try {
            if (CaminhoDocument === null) {
                const rawCaminho = CaminhoMap_1.CaminhoMap.toPersistence(Caminho);
                const CaminhoCreated = await this.CaminhoSchema.create(rawCaminho);
                return CaminhoMap_1.CaminhoMap.toDomain(CaminhoCreated);
            }
            else {
                CaminhoDocument.tempoDeslocacaoMin = Caminho.tempoDeslocacaoMin.value;
                CaminhoDocument.energiaNecessariaKWh = Caminho.energiaNecessariaKWh.value;
                CaminhoDocument.idArmazemOrigem = Caminho.idArmazemOrigem;
                CaminhoDocument.idArmazemDestino = Caminho.idArmazemDestino;
                CaminhoDocument.distanciaEntreArmazens = Caminho.distanciaEntreArmazens.value;
                await CaminhoDocument.save();
                return Caminho;
            }
        }
        catch (err) {
            throw err;
        }
    }
    async findByDomainId(caminhoId) {
        const query = { domainId: caminhoId };
        const caminhoRecord = await this.CaminhoSchema.findOne(query);
        if (caminhoRecord != null) {
            return CaminhoMap_1.CaminhoMap.toDomain(caminhoRecord);
        }
        else
            return null;
    }
    async listarTodosCaminhos() {
        const query = {};
        const caminhoRecords = await this.CaminhoSchema.find(query);
        if (caminhoRecords != null) {
            let caminhos = [];
            caminhoRecords.forEach(async function (camiaoRecord) {
                caminhos.push(await CaminhoMap_1.CaminhoMap.toDomain(camiaoRecord));
            });
            return caminhos;
        }
        else
            return null;
    }
    async listarPorIdArmazemOrigem(idArmazemOrigem) {
        const query = { idArmazemOrigem: idArmazemOrigem };
        const CaminhosRecord = await this.CaminhoSchema.find(query);
        if (CaminhosRecord != null) {
            let caminhos = [];
            CaminhosRecord.forEach(async function (camiaoRecord) {
                caminhos.push(await CaminhoMap_1.CaminhoMap.toDomain(camiaoRecord));
            });
            return caminhos;
        }
        else
            return null;
    }
    async listarPorIdArmazemDestino(idArmazemDestino) {
        const query = { idArmazemDestino: idArmazemDestino };
        const CaminhosRecord = await this.CaminhoSchema.find(query);
        if (CaminhosRecord != null) {
            let caminhos = [];
            CaminhosRecord.forEach(async function (camiaoRecord) {
                caminhos.push(await CaminhoMap_1.CaminhoMap.toDomain(camiaoRecord));
            });
            return caminhos;
        }
        else
            return null;
    }
    async deleteById(id) {
        const query = { domainId: id };
        const caminhoDeleted = await this.CaminhoSchema.findOne(query);
        if (caminhoDeleted != null) {
            await this.CaminhoSchema.deleteOne(query);
            return CaminhoMap_1.CaminhoMap.toDomain(caminhoDeleted);
        }
        return null;
    }
};
CaminhoRepo = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)('caminhoSchema')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CaminhoRepo);
exports.default = CaminhoRepo;
//# sourceMappingURL=caminhoRepo.js.map