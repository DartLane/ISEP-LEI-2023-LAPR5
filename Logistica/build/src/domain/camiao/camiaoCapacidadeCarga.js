"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamiaoCapacidadeCarga = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Result_1 = require("../../core/logic/Result");
const Guard_1 = require("../../core/logic/Guard");
class CamiaoCapacidadeCarga extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(capacidadeCarga) {
        if (capacidadeCarga <= 0) {
            return Result_1.Result.fail("Capacidade de Carga tem de ser superior a zero!");
        }
        const guardResult = Guard_1.Guard.againstNullOrUndefined(capacidadeCarga, 'capacidadeCarga');
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            return Result_1.Result.ok(new CamiaoCapacidadeCarga({ value: capacidadeCarga }));
        }
    }
}
exports.CamiaoCapacidadeCarga = CamiaoCapacidadeCarga;
//# sourceMappingURL=camiaoCapacidadeCarga.js.map