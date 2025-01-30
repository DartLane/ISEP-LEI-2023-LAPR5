"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaminhoEnergiaNecessariaKWh = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Result_1 = require("../../core/logic/Result");
const Guard_1 = require("../../core/logic/Guard");
class CaminhoEnergiaNecessariaKWh extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(caminhoEnergiaNecessariaKWh) {
        const guardResult = Guard_1.Guard.againstNullOrUndefined(caminhoEnergiaNecessariaKWh, 'caminhoEnergiaNecessariaKWh');
        if (!guardResult.succeeded || caminhoEnergiaNecessariaKWh < 0) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            return Result_1.Result.ok(new CaminhoEnergiaNecessariaKWh({ value: caminhoEnergiaNecessariaKWh }));
        }
    }
}
exports.CaminhoEnergiaNecessariaKWh = CaminhoEnergiaNecessariaKWh;
//# sourceMappingURL=CaminhoEnergiaNecessariaKWh.js.map