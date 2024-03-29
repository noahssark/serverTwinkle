"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_express_middleware_1 = require("zod-express-middleware");
const listing_controller_1 = require("../controllers/listing.controller");
const fileUpload_middleware_1 = __importDefault(require("../middlewares/fileUpload.middleware"));
const requireLoggedIn_middleware_1 = __importDefault(require("../middlewares/requireLoggedIn.middleware"));
const listing_schema_1 = require("../schemas/listing.schema");
const listingRouter = (0, express_1.Router)();
listingRouter.post('/listings/add', requireLoggedIn_middleware_1.default, fileUpload_middleware_1.default, listing_controller_1.createListingHandler);
listingRouter.get('/listings/all', listing_controller_1.getAllListingsHandler);
listingRouter.get('/listings/single/:id', (0, zod_express_middleware_1.processRequestParams)(listing_schema_1.getSingleListingSchema.params), listing_controller_1.getSingleListingHandler);
listingRouter.patch('/listings/update/:id', fileUpload_middleware_1.default, listing_controller_1.updateListingHandler);
listingRouter.delete('/listings/delete/:id', (0, zod_express_middleware_1.processRequestParams)(listing_schema_1.deleteListingSchema.params), listing_controller_1.deleteListingHandler);
listingRouter.put('/listings/approve/:id', listing_controller_1.approveListingHandler);
listingRouter.delete('/listings/delete-file/:id/:type/:key', listing_controller_1.deleteSpecificFileFromListingHandler);
exports.default = listingRouter;
