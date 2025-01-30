"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const caminhoRoute_1 = __importDefault(require("./routes/caminhoRoute"));
const camiaoRoute_1 = __importDefault(require("./routes/camiaoRoute"));
const planoEntregasRoute_1 = __importDefault(require("./routes/planoEntregasRoute"));
exports.default = () => {
    const app = (0, express_1.Router)();
    (0, caminhoRoute_1.default)(app);
    (0, camiaoRoute_1.default)(app);
    (0, planoEntregasRoute_1.default)(app);
    return app;
};
//# sourceMappingURL=index.js.map