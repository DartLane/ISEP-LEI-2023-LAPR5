"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../../config"));
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use('/caminhos', route);
    const ctrl = typedi_1.Container.get(config_1.default.controllers.caminho.name);
    route.post('', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            energiaNecessariaKWh: celebrate_1.Joi.number().required(),
            tempoDeslocacaoMin: celebrate_1.Joi.number().required(),
            idArmazemOrigem: celebrate_1.Joi.string().required(),
            idArmazemDestino: celebrate_1.Joi.string().required(),
            distanciaEntreArmazens: celebrate_1.Joi.number().required()
        })
    }), (req, res, next) => ctrl.createCaminho(req, res, next));
    route.put('/:id', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            //id: Joi.string().required(),
            energiaNecessariaKWh: celebrate_1.Joi.number().required(),
            tempoDeslocacaoMin: celebrate_1.Joi.number().required(),
            idArmazemOrigem: celebrate_1.Joi.string().required(),
            idArmazemDestino: celebrate_1.Joi.string().required(),
            distanciaEntreArmazens: celebrate_1.Joi.number().required()
        }),
    }), (req, res, next) => ctrl.updateCaminho(req, res, next));
    route.patch('/:id', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            energiaNecessariaKWh: celebrate_1.Joi.number().optional(),
            tempoDeslocacaoMin: celebrate_1.Joi.number().optional(),
            idArmazemOrigem: celebrate_1.Joi.string().optional(),
            idArmazemDestino: celebrate_1.Joi.string().optional(),
            distanciaEntreArmazens: celebrate_1.Joi.number().optional()
        }),
    }), (req, res, next) => ctrl.partialUpdateCaminho(req, res, next));
    route.get('/:id', function (req, res, next) { ctrl.getById(req, res, next); });
    route.get('', function (req, res, next) { ctrl.listarTodosCaminhos(req, res, next); });
    route.get('/listarPorIdArmazenOrigem/:idArmazemOrigem', function (req, res, next) { ctrl.listarPorIdArmazemOrigem(req, res, next); });
    route.get('/listarPorIdArmazenDestino/:idArmazemDestino', function (req, res, next) { ctrl.listarPorIdArmazemDestino(req, res, next); });
    route.delete('/:id', function (req, res, next) { ctrl.deleteById(req, res, next); });
};
//# sourceMappingURL=caminhoRoute.js.map