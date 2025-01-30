"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caminho = void 0;
const AggregateRoot_1 = require("../../core/domain/AggregateRoot");
const Result_1 = require("../../core/logic/Result");
const Guard_1 = require("../../core/logic/Guard");
class Caminho extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get energiaNecessariaKWh() {
        return this.props.energiaNecessariaKWh;
    }
    set energiaNecessariaKWh(value) {
        this.props.energiaNecessariaKWh = value;
    }
    get tempoDeslocacaoMin() {
        return this.props.tempoDeslocacaoMin;
    }
    set tempoDeslocacaoMin(value) {
        this.props.tempoDeslocacaoMin = value;
    }
    get idArmazemOrigem() {
        return this.props.idArmazemOrigem;
    }
    set idArmazemOrigem(value) {
        this.props.idArmazemOrigem = value;
    }
    get idArmazemDestino() {
        return this.props.idArmazemDestino;
    }
    set idArmazemDestino(value) {
        this.props.idArmazemDestino = value;
    }
    get distanciaEntreArmazens() {
        return this.props.distanciaEntreArmazens;
    }
    set distanciaEntreArmazens(value) {
        this.props.distanciaEntreArmazens = value;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardedProps = [
            { argument: props.energiaNecessariaKWh, argumentName: 'energiaNecessariaKWh' },
            { argument: props.tempoDeslocacaoMin, argumentName: 'tempoDeslocacaoMin' },
            { argument: props.idArmazemOrigem, argumentName: 'idArmazemOrigem' },
            { argument: props.idArmazemDestino, argumentName: 'idArmazemDestino' },
            { argument: props.distanciaEntreArmazens, argumentName: 'distanciaEntreArmazens' }
        ];
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk(guardedProps);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            const caminho = new Caminho(Object.assign({}, props), id);
            return Result_1.Result.ok(caminho);
        }
    }
}
exports.Caminho = Caminho;
//# sourceMappingURL=Caminho.js.map