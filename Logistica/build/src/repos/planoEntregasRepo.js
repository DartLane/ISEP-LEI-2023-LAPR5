"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const https = require('https');
let PlanoEntregasRepo = class PlanoEntregasRepo {
    async getPlanoEntregas(data) {
        /*
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        // URL do pedido ao planeamento
        //var URL = config.gestaoArmazensURL + config.gestaoArmazensAPIS.armazens + "/" + ArmazemId;
        const response = await fetch(URL, {

            // Adding method type
            method: "POST",
            agent: httpsAgent,
        });

        return await response.status;
        */
        return null;
    }
    async getPlanoEntregasMenorTempo(data) {
        return null;
    }
    async getPlanoEntregasMaiorMassa(data) {
        return null;
    }
    async getPlanoEntregasCombinado(data) {
        return null;
    }
};
PlanoEntregasRepo = __decorate([
    (0, typedi_1.Service)()
], PlanoEntregasRepo);
exports.default = PlanoEntregasRepo;
//# sourceMappingURL=planoEntregasRepo.js.map