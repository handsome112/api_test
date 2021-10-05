"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MenuSchema = new mongoose_1.Schema({
    title: { type: String, default: '' },
    path: { type: String, default: '' },
    internal: { type: Boolean, default: false },
    parentId: { type: mongoose_1.Schema.Types.ObjectId, index: true },
    help: { type: String, default: '' },
    section: { type: String, default: '', enum: ['main', 'header', 'footer'] },
    public: { type: Boolean, default: false },
    isOpenNewTab: { type: Boolean, default: false },
    ordering: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=menu.schema.js.map