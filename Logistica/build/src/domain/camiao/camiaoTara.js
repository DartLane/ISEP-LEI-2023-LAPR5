"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamiaoTara = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Result_1 = require("../../core/logic/Result");
const Guard_1 = require("../../core/logic/Guard");
class CamiaoTara extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(tara) {
        if (tara <= 0) {
            return Result_1.Result.fail("Tara tem de ser superior a zero!");
        }
        const guardResult = Guard_1.Guard.againstNullOrUndefined(tara, 'tara');
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            return Result_1.Result.ok(new CamiaoTara({ value: tara }));
        }
    }
}
exports.CamiaoTara = CamiaoTara;
//# sourceMappingURL=camiaoTara.js.map