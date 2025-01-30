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
    app.use('/camiao', route);
    const ctrl = typedi_1.Container.get(config_1.default.controllers.camiao.name);
    //Criar camiao
    route.post('', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            matricula: celebrate_1.Joi.string().required(),
            tara: celebrate_1.Joi.number().required(),
            capacidadeCarga: celebrate_1.Joi.number().required(),
            cargaTotalBaterias: celebrate_1.Joi.number().required(),
            autonomia: celebrate_1.Joi.number().required(),
            tempoRecarregamento: celebrate_1.Joi.number().required()
        })
    }), (req, res, next) => ctrl.createCamiao(req, res, next));
    //Editar Camião
    route.put('/:id', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            id: celebrate_1.Joi.string().required(),
            matricula: celebrate_1.Joi.string().optional(),
            tara: celebrate_1.Joi.number().required(),
            capacidadeCarga: celebrate_1.Joi.number().required(),
            cargaTotalBaterias: celebrate_1.Joi.number().required(),
            autonomia: celebrate_1.Joi.number().required(),
            tempoRecarregamento: celebrate_1.Joi.number().required()
        }),
    }), (req, res, next) => ctrl.updateCamiao(req, res, next));
    route.patch('/:id', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            id: celebrate_1.Joi.string().required(),
            tara: celebrate_1.Joi.number().optional(),
            capacidadeCarga: celebrate_1.Joi.number().optional(),
            cargaTotalBaterias: celebrate_1.Joi.number().optional(),
            autonomia: celebrate_1.Joi.number().optional(),
            tempoRecarregamento: celebrate_1.Joi.number().optional()
        }),
    }), (req, res, next) => ctrl.partialUpdateCamiao(req, res, next));
    //Listar Camiões por id
    route.get('/:id', function (req, res, next) { ctrl.getById(req, res, next); });
    //Listar Camião por matricula
    route.get('/matricula/:matricula', function (req, res, next) { ctrl.getByMatricula(req, res, next); });
    //Listar todos os Camiões
    route.get('/', function (req, res, next) { ctrl.getAll(req, res, next); });
    //Listar Camioes inibidos
    route.get('/inibidos', function (req, res, next) { ctrl.getInibidos(req, res, next); });
    //Eliminar Camião por id ou matricula
    route.delete('/:id', function (req, res, next) { ctrl.deleteById(req, res, next); });
    route.delete('/matricula/:matricula', function (req, res, next) { ctrl.deleteByMatricula(req, res, next); });
    //Inibir Camião
    route.delete('/inibir/:matricula', function (req, res, next) { ctrl.inibirByMatricula(req, res, next); });
};
//# sourceMappingURL=camiaoRoute.js.map