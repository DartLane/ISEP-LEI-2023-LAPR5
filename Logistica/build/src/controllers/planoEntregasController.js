"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../config"));
let PlanoEntregasController = class PlanoEntregasController {
    constructor(planoEntregasServiceInstance) {
        this.planoEntregasServiceInstance = planoEntregasServiceInstance;
    }
    async getPlanoEntregas(req, res, next) {
        try {
            const coiso = await this.planoEntregasServiceInstance.getPlanoEntregas(Number(req.params.dia), Number(req.params.mes), Number(req.params.ano));
            if (coiso.isFailure) {
                return res.status(404).send();
            }
            return res.json(coiso).status(200).send();
            //return res.status(200).send();
        }
        catch (e) {
            return next(e);
        }
    }
    async getPlanoEntregasMenorTempo(req, res, next) {
        try {
            const coiso = await this.planoEntregasServiceInstance.getPlanoEntregasMenorTempo(Number(req.params.dia), Number(req.params.mes), Number(req.params.ano));
            if (coiso.isFailure) {
                return res.status(404).send();
            }
            return res.json(coiso).status(200).send();
            //return res.status(200).send();
        }
        catch (e) {
            return next(e);
        }
    }
    async getPlanoEntregasMaiorMassa(req, res, next) {
        try {
            const coiso = await this.planoEntregasServiceInstance.getPlanoEntregasMaiorMassa(Number(req.params.dia), Number(req.params.mes), Number(req.params.ano));
            if (coiso.isFailure) {
                return res.status(404).send();
            }
            return res.json(coiso).status(200).send();
            //return res.status(200).send();
        }
        catch (e) {
            return next(e);
        }
    }
    async getPlanoEntregasCombinada(req, res, next) {
        try {
            const coiso = await this.planoEntregasServiceInstance.getPlanoEntregasCombinado(Number(req.params.dia), Number(req.params.mes), Number(req.params.ano));
            if (coiso.isFailure) {
                return res.status(404).send();
            }
            return res.json(coiso).status(200).send();
            //return res.status(200).send();
        }
        catch (e) {
            return next(e);
        }
    }
};
PlanoEntregasController = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)(config_1.default.services.planoEntregas.name)),
    __metadata("design:paramtypes", [Object])
], PlanoEntregasController);
exports.default = PlanoEntregasController;
//# sourceMappingURL=planoEntregasController.js.map