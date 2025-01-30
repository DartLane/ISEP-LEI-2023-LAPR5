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
let CamiaoController = class CamiaoController {
    constructor(camiaoServiceInstance) {
        this.camiaoServiceInstance = camiaoServiceInstance;
    }
    /*
        Criar Camião
    */
    async createCamiao(req, res, next) {
        try {
            const camiaoOrError = await this.camiaoServiceInstance.createCamiao(req.body);
            if (camiaoOrError.isFailure) {
                return res.status(402).send();
            }
            const camiaoDTO = camiaoOrError.getValue();
            return res.json(camiaoDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    /*
        Editar Camião
    */
    async updateCamiao(req, res, next) {
        try {
            if (req.params.id != req.body.id) {
                return res.status(400).send("Id do body nao corresponde ao id dos parametros");
            }
            const camiaoOrError = await this.camiaoServiceInstance.updateCamiao(req.body);
            if (camiaoOrError.isFailure) {
                return res.status(404).send();
            }
            const camiaoDTO = camiaoOrError.getValue();
            return res.status(201).json(camiaoDTO);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async partialUpdateCamiao(req, res, next) {
        try {
            if (req.params.id != req.body.id) {
                return res.status(400).send("Id do body nao corresponde ao id dos parametros");
            }
            const camiaoOrError = await this.camiaoServiceInstance.partialUpdateCamiao(req.body);
            if (camiaoOrError.isFailure) {
                return res.status(404).send();
            }
            const camiaoDTO = camiaoOrError.getValue();
            return res.status(201).json(camiaoDTO);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    /*
        Listar Camião por ID
    */
    async getById(req, res, next) {
        try {
            const camiaoOrError = await this.camiaoServiceInstance.getById(req.params.id);
            if (camiaoOrError.isFailure) {
                return res.status(402).send();
            }
            const camiaoDTO = camiaoOrError.getValue();
            return res.json(camiaoDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    /*
        Listar Camião por Matricula
    */
    async getByMatricula(req, res, next) {
        try {
            const camiaoOrError = await this.camiaoServiceInstance.getByMatricula(req.params.matricula);
            if (camiaoOrError.isFailure) {
                return res.status(402).send();
            }
            const camiaoDTO = camiaoOrError.getValue();
            return res.json(camiaoDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    /*
        Listar todos os camiões do sistema
    */
    async getAll(req, res, next) {
        try {
            const camiaoOrError = await this.camiaoServiceInstance.getAll();
            if (camiaoOrError.isFailure) {
                return res.status(404).send();
            }
            const camiaoDTO = camiaoOrError.getValue();
            return res.json(camiaoDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    /*
        Listar todos os camiões inibidos do sistema
    */
    async getInibidos(req, res, next) {
        try {
            const camiaoOrError = await this.camiaoServiceInstance.getAllInibidos();
            if (camiaoOrError.isFailure) {
                return res.status(404).send();
            }
            const camiaoDTO = camiaoOrError.getValue();
            return res.json(camiaoDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    /*
        Eliminar Camião por ID
    */
    async deleteById(req, res, next) {
        try {
            const caminhoOrError = await this.camiaoServiceInstance.deleteById(req.params.id);
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
    /*
        Eliminar Camião por Matricula
    */
    async deleteByMatricula(req, res, next) {
        try {
            const caminhoOrError = await this.camiaoServiceInstance.deleteByMatricula(req.params.matricula);
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
    /*
        Inibir Camião por Matricula
    */
    async inibirByMatricula(req, res, next) {
        try {
            const caminhoOrError = await this.camiaoServiceInstance.softDeleteCamiao(req.params.matricula);
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
    async restaureSoftDeleteCamiao(req, res, next) {
        try {
            const camiaoOrError = await this.camiaoServiceInstance.restaureSoftDeleteCamiao(req.params.matricula);
            if (camiaoOrError.isFailure) {
                return res.status(402).send();
            }
            const camiaoDTO = camiaoOrError.getValue();
            return res.json(camiaoDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
};
CamiaoController = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)(config_1.default.services.camiao.name)),
    __metadata("design:paramtypes", [Object])
], CamiaoController);
exports.default = CamiaoController;
//# sourceMappingURL=camiaoController.js.map