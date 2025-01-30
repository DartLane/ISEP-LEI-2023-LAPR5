"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamiaoAutonomia = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Result_1 = require("../../core/logic/Result");
const Guard_1 = require("../../core/logic/Guard");
class CamiaoAutonomia extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(autonomia) {
        if (autonomia <= 0) {
            return Result_1.Result.fail("Autonomia tem de ser superior a zero!");
        }
        const guardResult = Guard_1.Guard.againstNullOrUndefined(autonomia, 'autonomia');
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            return Result_1.Result.ok(new CamiaoAutonomia({ value: autonomia }));
        }
    }
}
exports.CamiaoAutonomia = CamiaoAutonomia;
//# sourceMappingURL=camiaoAutonomia.js.map