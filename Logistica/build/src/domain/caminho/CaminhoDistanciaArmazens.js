"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaminhoDistanciaArmazens = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Result_1 = require("../../core/logic/Result");
const Guard_1 = require("../../core/logic/Guard");
class CaminhoDistanciaArmazens extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(caminhoDistanciaArmazens) {
        const guardResult = Guard_1.Guard.againstNullOrUndefined(caminhoDistanciaArmazens, 'caminhoDistanciaArmazens');
        if (!guardResult.succeeded || caminhoDistanciaArmazens < 0) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            return Result_1.Result.ok(new CaminhoDistanciaArmazens({ value: caminhoDistanciaArmazens }));
        }
    }
}
exports.CaminhoDistanciaArmazens = CaminhoDistanciaArmazens;
//# sourceMappingURL=CaminhoDistanciaArmazens.js.map