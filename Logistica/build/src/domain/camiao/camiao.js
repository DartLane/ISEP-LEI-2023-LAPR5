"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camiao = void 0;
const AggregateRoot_1 = require("../../core/domain/AggregateRoot");
const Result_1 = require("../../core/logic/Result");
const camiaoId_1 = require("./camiaoId");
const Guard_1 = require("../../core/logic/Guard");
class Camiao extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get CamiaoId() {
        return new camiaoId_1.CamiaoId(this.CamiaoId.toString());
    }
    get matricula() {
        return this.props.matricula;
    }
    get tara() {
        return this.props.tara;
    }
    get capacidadeCarga() {
        return this.props.capacidadeCarga;
    }
    get cargaTotalBaterias() {
        return this.props.cargaTotalBaterias;
    }
    get autonomia() {
        return this.props.autonomia;
    }
    get tempoRecarregamento() {
        return this.props.tempoRecarregamento;
    }
    set tara(value) {
        this.props.tara = value;
    }
    set capacidadeCarga(value) {
        this.props.capacidadeCarga = value;
    }
    set cargaTotalBaterias(value) {
        this.props.cargaTotalBaterias = value;
    }
    set autonomia(value) {
        this.props.autonomia = value;
    }
    set tempoRecarregamento(value) {
        this.props.tempoRecarregamento = value;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardedProps = [
            // { argument: props.matricula, argumentName: 'matricula'},
            { argument: props.tara, argumentName: 'tara ' },
            { argument: props.capacidadeCarga, argumentName: 'capacidadeCarga' },
            { argument: props.cargaTotalBaterias, argumentName: 'cargaTotalBaterias' },
            { argument: props.autonomia, argumentName: 'autonomia' },
            { argument: props.tempoRecarregamento, argumentName: 'tempoRecarregamento' }
        ];
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk(guardedProps);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            const user = new Camiao(Object.assign({}, props), id);
            return Result_1.Result.ok(user);
        }
    }
}
exports.Camiao = Camiao;
//# sourceMappingURL=camiao.js.map