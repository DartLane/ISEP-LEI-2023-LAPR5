"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamiaoMatricula = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Result_1 = require("../../core/logic/Result");
const Guard_1 = require("../../core/logic/Guard");
class CamiaoMatricula extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(matricula) {
        var reg = /^(([A-Z]{2}-\d{2}-(\d{2}|[A-Z]{2}))|(\d{2}-(\d{2}-[A-Z]{2}|[A-Z]{2}-\d{2})))$/;
        if (!reg.test(matricula)) {
            return Result_1.Result.fail("Matricula com formato Inválido");
        }
        const guardResult = Guard_1.Guard.againstNullOrUndefined(matricula, 'matricula');
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            return Result_1.Result.ok(new CamiaoMatricula({ value: matricula }));
        }
    }
}
exports.CamiaoMatricula = CamiaoMatricula;
//# sourceMappingURL=camiaoMatricula.js.map