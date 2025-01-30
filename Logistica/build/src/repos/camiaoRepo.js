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
const CamiaoMap_1 = require("../mappers/CamiaoMap");
const camiaoId_1 = require("../domain/camiao/camiaoId");
let CamiaoRepo = class CamiaoRepo {
    constructor(CamiaoSchema) {
        this.CamiaoSchema = CamiaoSchema;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    /*
        Verificar que camião que se pretende criar nao existe
    */
    async exists(camiao) {
        const idX = camiao.id instanceof camiaoId_1.CamiaoId ? camiao.id.toValue() : camiao.id;
        const query = { domainId: idX };
        const camiaoDocument = await this.CamiaoSchema.findOne(query);
        return !!camiaoDocument === true;
    }
    /*
        Criar Camião
    */
    async save(Camiao) {
        const query = { domainId: Camiao.id.toString() };
        const CamiaoDocument = await this.CamiaoSchema.findOne(query);
        try {
            if (CamiaoDocument === null) {
                const rawCamiao = CamiaoMap_1.CamiaoMap.toPersistence(Camiao);
                const CamiaoCreated = await this.CamiaoSchema.create(rawCamiao);
                return CamiaoMap_1.CamiaoMap.toDomain(CamiaoCreated);
            }
            else {
                CamiaoDocument.matricula = Camiao.matricula.value;
                CamiaoDocument.tara = Camiao.tara.value;
                CamiaoDocument.capacidadeCarga = Camiao.capacidadeCarga.value;
                CamiaoDocument.cargaTotalBaterias = Camiao.cargaTotalBaterias.value;
                CamiaoDocument.autonomia = Camiao.autonomia.value;
                CamiaoDocument.tempoRecarregamento = Camiao.tempoRecarregamento.value;
                await CamiaoDocument.save();
                return Camiao;
            }
        }
        catch (err) {
            throw err;
        }
    }
    /*
        Listar  Camião por Id (nunca usado)
    */
    async findById(CamiaoId) {
        const idX = CamiaoId;
        const query = { domainId: idX };
        const CamiaoRecord = await this.CamiaoSchema.findOne(query);
        if (CamiaoRecord != null) {
            return CamiaoMap_1.CamiaoMap.toDomain(CamiaoRecord);
        }
        else
            return null;
    }
    /*
        Listar  Camião por Matricula
    */
    async getByMatricula(matriculaa) {
        const query = { matricula: matriculaa };
        const CamiaoRecord = await this.CamiaoSchema.findOne(query);
        if (CamiaoRecord != null) {
            return CamiaoMap_1.CamiaoMap.toDomain(CamiaoRecord);
        }
        else
            return null;
    }
    /*
        Listar Todos os Camiões
    */
    async getAll() {
        const query = {};
        const camioesRecords = await this.CamiaoSchema.find(query);
        if (camioesRecords != null) {
            let camioes = [];
            camioesRecords.forEach(async function (camiaoRecord) {
                camioes.push(await CamiaoMap_1.CamiaoMap.toDomain(camiaoRecord));
            });
            return camioes;
        }
        else
            return null;
    }
    /*
        Eliminar Camião por Id (nunca usado)
    */
    async deleteById(id) {
        const query = { domainId: id };
        const caminhoDeleted = await this.CamiaoSchema.findOne(query);
        if (caminhoDeleted != null) {
            await this.CamiaoSchema.deleteOne(query);
            return CamiaoMap_1.CamiaoMap.toDomain(caminhoDeleted);
        }
        return null;
    }
    /*
        Eliminar Camião por Matricula
    */
    async deleteByMatricula(matricula) {
        const query = { matricula: matricula };
        const camiaoDeleted = await this.CamiaoSchema.findOne(query);
        if (camiaoDeleted != null) {
            await this.CamiaoSchema.deleteOne(query);
            return CamiaoMap_1.CamiaoMap.toDomain(camiaoDeleted);
        }
        return null;
    }
    /*
        Inibir um Camião
    */
    async softDeleteCamiao(matricula) {
        const query = { matricula: matricula };
        const camiaoDeleted = await this.CamiaoSchema.findOne(query);
        if (camiaoDeleted != null) {
            await this.CamiaoSchema.softDelete(query);
            return CamiaoMap_1.CamiaoMap.toDomain(camiaoDeleted);
        }
        return null;
    }
    /*
        Listar Camiões Inibidos
    */
    async getCamioesInibidos() {
        const query = {};
        //const query = { isDeleted: true };
        const camioesRecords = await this.CamiaoSchema.find(query);
        if (camioesRecords != null) {
            let camioes = [];
            camioesRecords.forEach(async function (camiaoRecord) {
                camioes.push(await CamiaoMap_1.CamiaoMap.toDomain(camiaoRecord));
            });
            return camioes;
        }
        else
            return null;
    }
    /*
        Restaurar Camião Inibido
    */
    async restaureSoftDeleteCamiao(matricula) {
        const query = { matricula: matricula };
        const camiaoDeleted = await this.CamiaoSchema.findOne(query);
        if (camiaoDeleted != null) {
            await this.CamiaoSchema.restore(query);
            return CamiaoMap_1.CamiaoMap.toDomain(camiaoDeleted);
        }
        return null;
    }
};
CamiaoRepo = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)('camiaoSchema')),
    __metadata("design:paramtypes", [Object])
], CamiaoRepo);
exports.default = CamiaoRepo;
//# sourceMappingURL=camiaoRepo.js.map