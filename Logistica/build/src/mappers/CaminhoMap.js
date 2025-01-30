"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaminhoMap = void 0;
const Mapper_1 = require("../core/infra/Mapper");
const Caminho_1 = require("../domain/caminho/Caminho");
const UniqueEntityID_1 = require("../core/domain/UniqueEntityID");
const CaminhoEnergiaNecessariaKWh_1 = require("../domain/caminho/CaminhoEnergiaNecessariaKWh");
const CaminhoTempoDeslocacaoMin_1 = require("../domain/caminho/CaminhoTempoDeslocacaoMin");
const CaminhoDistanciaArmazens_1 = require("../domain/caminho/CaminhoDistanciaArmazens");
class CaminhoMap extends Mapper_1.Mapper {
    static toDTO(caminho) {
        return {
            id: caminho.id.toString(),
            energiaNecessariaKWh: caminho.energiaNecessariaKWh.value,
            tempoDeslocacaoMin: caminho.tempoDeslocacaoMin.value,
            idArmazemOrigem: caminho.idArmazemOrigem,
            idArmazemDestino: caminho.idArmazemDestino,
            distanciaEntreArmazens: caminho.distanciaEntreArmazens.value
        };
    }
    static toDomain2(caminho) {
        const caminhoOrError = Caminho_1.Caminho.create(caminho, new UniqueEntityID_1.UniqueEntityID(caminho.domainId));
        caminhoOrError.isFailure ? console.log(caminhoOrError.error) : '';
        return caminhoOrError.isSuccess ? caminhoOrError.getValue() : null;
    }
    static async toDomain(raw) {
        const caminhoEnergiaNecessariaOrError = CaminhoEnergiaNecessariaKWh_1.CaminhoEnergiaNecessariaKWh.create(raw.energiaNecessariaKWh);
        const caminhoTempoDeslocacaoOrError = CaminhoTempoDeslocacaoMin_1.CaminhoTempoDeslocacaoMin.create(raw.tempoDeslocacaoMin);
        const idArmazemOrigemOrError = raw.idArmazemOrigem;
        const idArmazemDestinoOrError = raw.idArmazemDestino;
        const caminhoDistanciaArmazensOrError = CaminhoDistanciaArmazens_1.CaminhoDistanciaArmazens.create(raw.distanciaEntreArmazens);
        const caminhoOrError = Caminho_1.Caminho.create({
            energiaNecessariaKWh: caminhoEnergiaNecessariaOrError.getValue(),
            tempoDeslocacaoMin: caminhoTempoDeslocacaoOrError.getValue(),
            idArmazemOrigem: idArmazemOrigemOrError,
            idArmazemDestino: idArmazemDestinoOrError,
            distanciaEntreArmazens: caminhoDistanciaArmazensOrError.getValue(),
        }, new UniqueEntityID_1.UniqueEntityID(raw.domainId));
        caminhoOrError.isFailure ? console.log(caminhoOrError.error) : '';
        return caminhoOrError.isSuccess ? caminhoOrError.getValue() : null;
    }
    static toPersistence(caminho) {
        //create no CaminhoSchema
        return {
            domainId: caminho.id.toString(),
            energiaNecessariaKWh: caminho.energiaNecessariaKWh.value,
            tempoDeslocacaoMin: caminho.tempoDeslocacaoMin.value,
            idArmazemOrigem: caminho.idArmazemOrigem,
            idArmazemDestino: caminho.idArmazemDestino,
            distanciaEntreArmazens: caminho.distanciaEntreArmazens.value
        };
    }
}
exports.CaminhoMap = CaminhoMap;
//# sourceMappingURL=CaminhoMap.js.map