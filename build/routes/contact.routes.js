"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_express_middleware_1 = require("zod-express-middleware");
const contact_controller_1 = require("../controllers/contact.controller");
const contact_schema_1 = require("../schemas/contact.schema");
const contactRouter = (0, express_1.Router)();
contactRouter.post('/contacts/add', (0, zod_express_middleware_1.processRequestBody)(contact_schema_1.createContactSchema.body), contact_controller_1.createNewContactHandler);
contactRouter.get('/contacts/all', contact_controller_1.getAllContactsHandler);
contactRouter.patch('/contacts/update/:id', (0, zod_express_middleware_1.processRequestParams)(contact_schema_1.updateContactStatusSchema.params), (0, zod_express_middleware_1.processRequestBody)(contact_schema_1.updateContactStatusSchema.body), contact_controller_1.updateContactStatus);
contactRouter.delete('/contacts/delete/:id', contact_controller_1.deleteContactHandler);
exports.default = contactRouter;
