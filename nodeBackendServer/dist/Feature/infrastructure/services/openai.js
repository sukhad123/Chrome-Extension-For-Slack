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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAI = openAI;
const openai_1 = __importDefault(require("openai"));
const client = new openai_1.default({
    apiKey: process.env.OPENAI,
});
function openAI(prompt, input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield client.responses.create({
                model: 'gpt-4',
                instructions: prompt,
                input: input,
            });
            return response.output_text;
        }
        catch (err) {
            return err;
        }
    });
}
