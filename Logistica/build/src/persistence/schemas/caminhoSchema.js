"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CaminhoSchema = new mongoose_1.default.Schema({
    domainId: { type: String, unique: true },
    energiaNecessariaKWh: { type: String, unique: false },
    tempoDeslocacaoMin: { type: String, unique: false },
    idArmazemOrigem: {
        type: String,
        index: true
    },
    idArmazemDestino: {
        type: String,
        index: true
    },
    distanciaEntreArmazens: { type: String, unique: false }
}, {
    timestamps: true
});
//Não permite que existam 2 Caminhos com a Origem e o Destino iguais
CaminhoSchema.index({ idArmazemOrigem: 1, idArmazemDestino: 1 }, { unique: true });
exports.default = mongoose_1.default.model('Caminho', CaminhoSchema);
//# sourceMappingURL=caminhoSchema.js.map