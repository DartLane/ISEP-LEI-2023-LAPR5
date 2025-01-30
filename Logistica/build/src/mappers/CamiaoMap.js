"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamiaoMap = void 0;
const Mapper_1 = require("../core/infra/Mapper");
const camiao_1 = require("../domain/camiao/camiao");
const UniqueEntityID_1 = require("../core/domain/UniqueEntityID");
const camiaoMatricula_1 = require("../domain/camiao/camiaoMatricula");
const camiaoTara_1 = require("../domain/camiao/camiaoTara");
const camiaoCapacidadeCarga_1 = require("../domain/camiao/camiaoCapacidadeCarga");
const camiaoCargaTotalBaterias_1 = require("../domain/camiao/camiaoCargaTotalBaterias");
const camiaoAutonomia_1 = require("../domain/camiao/camiaoAutonomia");
const camiaoTempoRecarregamento_1 = require("../domain/camiao/camiaoTempoRecarregamento");
class CamiaoMap extends Mapper_1.Mapper {
    static toDTO(camiao) {
        return {
            id: camiao.id.toString(),
            matricula: camiao.matricula.value,
            tara: camiao.tara.value,
            capacidadeCarga: camiao.capacidadeCarga.value,
            cargaTotalBaterias: camiao.cargaTotalBaterias.value,
            autonomia: camiao.autonomia.value,
            tempoRecarregamento: camiao.tempoRecarregamento.value
        };
    }
    /*
      public static toDomain (camiao: any | Model<ICamiaoPersistence & Document>): Camiao {
        const camiaoOrError = Camiao.create(
          camiao,
          new UniqueEntityID(camiao.domainId))
    
        camiaoOrError.isFailure ? console.log(camiaoOrError.error) : '';
        
        return camiaoOrError.isSuccess ? camiaoOrError.getValue() : null;
      }
      */
    static async toDomain(raw) {
        const camiaoMatriculaOrError = camiaoMatricula_1.CamiaoMatricula.create(raw.matricula);
        const camiaoTaraOrError = camiaoTara_1.CamiaoTara.create(raw.tara);
        const camiaoCapacidadeOrError = camiaoCapacidadeCarga_1.CamiaoCapacidadeCarga.create(raw.capacidadeCarga);
        const camiaoCargaBateriaOrError = camiaoCargaTotalBaterias_1.CamiaoCargaTotalBaterias.create(raw.cargaTotalBaterias);
        const camiaoAutonomiaOrError = camiaoAutonomia_1.CamiaoAutonomia.create(raw.autonomia);
        const camiaoTempoCarregamentoOrError = camiaoTempoRecarregamento_1.CamiaoTempoRecarregamento.create(raw.tempoRecarregamento);
        const camiaoOrError = camiao_1.Camiao.create({
            matricula: camiaoMatriculaOrError.getValue(),
            tara: camiaoTaraOrError.getValue(),
            capacidadeCarga: camiaoCapacidadeOrError.getValue(),
            cargaTotalBaterias: camiaoCargaBateriaOrError.getValue(),
            autonomia: camiaoAutonomiaOrError.getValue(),
            tempoRecarregamento: camiaoTempoCarregamentoOrError.getValue()
        }, new UniqueEntityID_1.UniqueEntityID(raw.domainId));
        camiaoOrError.isFailure ? console.log(camiaoOrError.error) : '';
        return camiaoOrError.isSuccess ? camiaoOrError.getValue() : null;
    }
    static toPersistence(camiao) {
        const a = {
            domainId: camiao.id.toString(),
            matricula: camiao.matricula.value,
            tara: camiao.tara.value,
            capacidadeCarga: camiao.capacidadeCarga.value,
            cargaTotalBaterias: camiao.cargaTotalBaterias.value,
            autonomia: camiao.autonomia.value,
            tempoRecarregamento: camiao.tempoRecarregamento.value
        };
        return a;
    }
}
exports.CamiaoMap = CamiaoMap;
//# sourceMappingURL=CamiaoMap.js.map