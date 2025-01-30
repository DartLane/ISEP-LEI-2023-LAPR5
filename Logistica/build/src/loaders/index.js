"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
const mongoose_1 = __importDefault(require("./mongoose"));
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("../../config"));
exports.default = async ({ expressApp }) => {
    const mongoConnection = await (0, mongoose_1.default)();
    logger_1.default.info('✌️ DB loaded and connected!');
    //---------  Schema ------------------------------------------------
    const caminhoSchema = {
        // compare with the approach followed in repos and services
        name: 'caminhoSchema',
        schema: '../persistence/schemas/caminhoSchema',
    };
    const camiaoSchema = {
        // compare with the approach followed in repos and services
        name: 'camiaoSchema',
        schema: '../persistence/schemas/camiaoSchema',
    };
    //------------------  Controller    ------------------------------------------------
    const caminhoController = {
        name: config_1.default.controllers.caminho.name,
        path: config_1.default.controllers.caminho.path
    };
    const camiaoController = {
        name: config_1.default.controllers.camiao.name,
        path: config_1.default.controllers.camiao.path
    };
    const planoEntregasController = {
        name: config_1.default.controllers.planoEntregas.name,
        path: config_1.default.controllers.planoEntregas.path
    };
    //------------------------- Repo -------------------------------------------------
    const caminhoRepo = {
        name: config_1.default.repos.caminho.name,
        path: config_1.default.repos.caminho.path
    };
    const camiaoRepo = {
        name: config_1.default.repos.camiao.name,
        path: config_1.default.repos.camiao.path
    };
    const planoEntregasRepo = {
        name: config_1.default.repos.planoEntregas.name,
        path: config_1.default.repos.planoEntregas.path
    };
    const armazemRepo = {
        name: config_1.default.repos.armazem.name,
        path: config_1.default.repos.armazem.path
    };
    //---------------------- Service ------------------------------
    const caminhoService = {
        name: config_1.default.services.caminho.name,
        path: config_1.default.services.caminho.path
    };
    const camiaoService = {
        name: config_1.default.services.camiao.name,
        path: config_1.default.services.camiao.path
    };
    const planoEntregasService = {
        name: config_1.default.services.planoEntregas.name,
        path: config_1.default.services.planoEntregas.path
    };
    //--------------------Requests------------------------------
    const armazemRequests = {
        name: config_1.default.requests.armazens.name,
        path: config_1.default.requests.armazens.path
    };
    (0, dependencyInjector_1.default)({
        mongoConnection,
        schemas: [
            caminhoSchema,
            camiaoSchema
        ],
        requests: [
            armazemRequests
        ],
        controllers: [
            caminhoController,
            camiaoController,
            planoEntregasController
        ],
        repos: [
            caminhoRepo,
            camiaoRepo,
            planoEntregasRepo,
            armazemRepo
        ],
        services: [
            caminhoService,
            camiaoService,
            planoEntregasService
        ],
    });
    logger_1.default.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');
    await (0, express_1.default)({ app: expressApp });
    logger_1.default.info('✌️ Express loaded');
};
//# sourceMappingURL=index.js.map