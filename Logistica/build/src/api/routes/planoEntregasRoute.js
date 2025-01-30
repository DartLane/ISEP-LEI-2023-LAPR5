"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../../config"));
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use('/planoEntregas', route);
    const ctrl = typedi_1.Container.get(config_1.default.controllers.planoEntregas.name);
    route.post('/:dia/:mes/:ano', function (req, res, next) { ctrl.getPlanoEntregas(req, res, next); });
    route.post('/menorTempo/:dia/:mes/:ano', function (req, res, next) { ctrl.getPlanoEntregasMenorTempo(req, res, next); });
    route.post('/maiorMassa/:dia/:mes/:ano', function (req, res, next) { ctrl.getPlanoEntregasMaiorMassa(req, res, next); });
    route.post('/combinada/:dia/:mes/:ano', function (req, res, next) { ctrl.getPlanoEntregasCombinada(req, res, next); });
};
//# sourceMappingURL=planoEntregasRoute.js.map