"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_softdelete_typescript_1 = require("mongoose-softdelete-typescript");
const CamiaoSchema = new mongoose_1.default.Schema({
    domainId: {
        type: String,
        unique: true
    },
    matricula: {
        type: String,
        unique: true,
        index: true
    },
    tara: {
        type: String,
        unique: false,
        min: 0
    },
    capacidadeCarga: {
        type: String,
        unique: false,
        min: 0
    },
    cargaTotalBaterias: {
        type: String,
        unique: false
    },
    autonomia: {
        type: String,
        unique: false
    },
    tempoRecarregamento: {
        type: String,
        unique: false
    },
}, { timestamps: true });
CamiaoSchema.plugin(mongoose_softdelete_typescript_1.softDeletePlugin);
//export default mongoose.model<ICamiaoPersistence & mongoose.Document>('Camiao', CamiaoSchema);
exports.default = mongoose_1.default.model('Camiao', CamiaoSchema);
//# sourceMappingURL=camiaoSchema.js.map