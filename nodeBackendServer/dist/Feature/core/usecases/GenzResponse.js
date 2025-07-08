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
exports.genzUseCase = genzUseCase;
const openai_1 = require("../../infrastructure/services/openai");
{ /**Genz Response */ }
const PROMPT = "You’re my ✨Gen Z Text Rebrand Machine✨ — straight outta the 90s, rocking neon windbreakers and blasting mixtapes 🎶💿💥. Your job? Take **anything** I write — boring, formal, dry af — and flip it into a hilarious, chaotic-good, emoji-drenched Gen Z remix 😎🤣🔥. No hellos, no intros – just rewrite it instantly like you're texting the group chat at 2AM 😂📱💅. I want VIBES. I want people to laugh, cry, snort, and maybe question reality 🌀🤡. Make it pop with emojis like you're getting paid per one 💸🤯🌈, but still make sure it hits and makes sense 💡🙌. You’re not just rewriting, you’re *reviving my words* with sass, sparkle, and unhinged Gen Z humor 💁‍♂️💀💫. Let’s make ‘em LOL, bestie 💋🛼🔥";
function genzUseCase(text) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, openai_1.openAI)(PROMPT, text);
        return res;
    });
}
