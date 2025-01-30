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
let CaminhoController = class CaminhoController {
    constructor(caminhoServiceInstance) {
        this.caminhoServiceInstance = caminhoServiceInstance;
    }
    async createCaminho(req, res, next) {
        try {
            var origemB = await this.caminhoServiceInstance.checkArmazemId(req.body.idArmazemOrigem);
            var destinoB = await this.caminhoServiceInstance.checkArmazemId(req.body.idArmazemDestino);
            if (!(origemB && destinoB)) {
                return res.status(402).send("Pelo menos um destes Armazéns não exite. VERIFIQUE");
            }
            const caminhoOrError = await this.caminhoServiceInstance.createCaminho(req.body);
            if (caminhoOrError.isFailure) {
                return res.status(402).send();
            }
            const caminhoDTO = caminhoOrError.getValue();
            return res.json(caminhoDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async updateCaminho(req, res, next) {
        try {
            var origemB = await this.caminhoServiceInstance.checkArmazemId(req.body.idArmazemOrigem);
            var destinoB = await this.caminhoServiceInstance.checkArmazemId(req.body.idArmazemDestino);
            if (!(origemB && destinoB)) {
                return res.status(402).send("Pelo menos um destes Armazéns não exite. VERIFIQUE");
            }
            const caminhoOrError = await this.caminhoServiceInstance.updateCaminho(req.body, req.params.id);
            if (caminhoOrError.isFailure) {
                return res.status(404).send();
            }
            const caminhoDTO = caminhoOrError.getValue();
            return res.status(201).json(caminhoDTO);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async partialUpdateCaminho(req, res, next) {
        try {
            const caminhoOrError = await this.caminhoServiceInstance.partialUpdateCaminho(req.body, req.params.id);
            if (caminhoOrError.isFailure) {
                return res.status(404).send();
            }
            const caminhoDTO = caminhoOrError.getValue();
            return res.status(201).json(caminhoDTO);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async getById(req, res, next) {
        try {
            const caminhoOrError = await this.caminhoServiceInstance.getById(req.params.id);
            if (caminhoOrError.isFailure) {
                return res.status(404).send();
            }
            const caminhoDTO = caminhoOrError.getValue();
            return res.json(caminhoDTO).status(200);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async listarTodosCaminhos(req, res, next) {
        try {
            const caminhoOrError = await this.caminhoServiceInstance.listarTodosCaminhos();
            if (caminhoOrError.isFailure) {
                return res.status(404).send();
            }
            const caminhoDTO = caminhoOrError.getValue();
            return res.json(caminhoDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    async listarPorIdArmazemOrigem(req, res, next) {
        try {
            const caminhoOrError = await this.caminhoServiceInstance.listarPorIdArmazemOrigem(req.params.idArmazemOrigem);
            if (caminhoOrError.isFailure) {
                return res.status(402).send();
            }
            const caminhoDTO = caminhoOrError.getValue();
            return res.json(caminhoDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async listarPorIdArmazemDestino(req, res, next) {
        try {
            const caminhoOrError = await this.caminhoServiceInstance.listarPorIdArmazemDestino(req.params.idArmazemDestino);
            if (caminhoOrError.isFailure) {
                return res.status(402).send();
            }
            const caminhoDTO = caminhoOrError.getValue();
            return res.json(caminhoDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async deleteById(req, res, next) {
        try {
            const caminhoOrError = await this.caminhoServiceInstance.deleteById(req.params.id);
            if (caminhoOrError.isFailure) {
                return res.status(404).send();
            }
            const caminhoDTO = caminhoOrError.getValue();
            return res.json(caminhoDTO).status(200);
        }
        catch (e) {
            return next(e);
        }
    }
};
CaminhoController = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)(config_1.default.services.caminho.name)),
    __metadata("design:paramtypes", [Object])
], CaminhoController);
exports.default = CaminhoController;
//# sourceMappingURL=caminhoController.js.map