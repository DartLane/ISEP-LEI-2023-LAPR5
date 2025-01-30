"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const config_1 = __importDefault(require("../../config"));
const https = require('https');
class ArmazemRequests {
    constructor() {
    }
    async getStatusById(ArmazemId) {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });
        var URL = config_1.default.gestaoArmazensURL + config_1.default.gestaoArmazensAPIS.armazens + "/" + ArmazemId;
        const response = await (0, node_fetch_1.default)(URL, {
            // Adding method type
            method: "GET",
            agent: httpsAgent,
        });
        return await response.status;
    }
}
exports.default = ArmazemRequests;
//# sourceMappingURL=armazemRequests.js.map