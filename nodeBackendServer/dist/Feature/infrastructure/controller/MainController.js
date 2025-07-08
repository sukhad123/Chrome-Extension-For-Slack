"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainController = mainController;
{ /**Main Controller of the app */ }
const ProfessionalResponse_1 = require("../../core/usecases/ProfessionalResponse");
const GenzResponse_1 = require("../../core/usecases/GenzResponse");
function mainController(text, type) {
    return __awaiter(this, void 0, void 0, function* () {
        //read and redirect as required
        if (type === 'genz') {
            const res = yield (0, GenzResponse_1.genzUseCase)(text);
            return res;
            //TODO implement the genz call
        }
        else {
            const res = yield (0, ProfessionalResponse_1.professionalUsecase)(text);
            return res;
            //TODO implement the professional call
        }
    });
}
