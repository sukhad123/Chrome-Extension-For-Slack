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
exports.professionalUsecase = professionalUsecase;
const openai_1 = require("../../infrastructure/services/openai");
{ /**Professional Response */ }
const PROMPT = "You are an AI Assistant, you will recieve a string from user and your job is to rewrite that text in a professional way. Don't say hi/hello just rewrite and make the text super professional. ";
function professionalUsecase(text) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, openai_1.openAI)(PROMPT, text);
        return res;
    });
}
