"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamiaoTempoRecarregamento = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Result_1 = require("../../core/logic/Result");
const Guard_1 = require("../../core/logic/Guard");
class CamiaoTempoRecarregamento extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(tempoRecarregamento) {
        if (tempoRecarregamento <= 0) {
            return Result_1.Result.fail("Tempo de Recarregamento tem de ser superior a zero!");
        }
        const guardResult = Guard_1.Guard.againstNullOrUndefined(tempoRecarregamento, 'tempoRecarregamento');
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            return Result_1.Result.ok(new CamiaoTempoRecarregamento({ value: tempoRecarregamento }));
        }
    }
}
exports.CamiaoTempoRecarregamento = CamiaoTempoRecarregamento;
//# sourceMappingURL=camiaoTempoRecarregamento.js.map