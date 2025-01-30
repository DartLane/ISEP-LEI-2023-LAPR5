"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamiaoCargaTotalBaterias = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Result_1 = require("../../core/logic/Result");
const Guard_1 = require("../../core/logic/Guard");
class CamiaoCargaTotalBaterias extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(cargaTotalBaterias) {
        if (cargaTotalBaterias <= 0) {
            return Result_1.Result.fail("Carga Total Baterias tem de ser superior a zero!");
        }
        const guardResult = Guard_1.Guard.againstNullOrUndefined(cargaTotalBaterias, 'cargaTotalBaterias');
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            return Result_1.Result.ok(new CamiaoCargaTotalBaterias({ value: cargaTotalBaterias }));
        }
    }
}
exports.CamiaoCargaTotalBaterias = CamiaoCargaTotalBaterias;
//# sourceMappingURL=camiaoCargaTotalBaterias.js.map