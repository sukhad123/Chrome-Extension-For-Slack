import { openAI } from "../../infrastructure/services/openai";

{/**Professional Response */}
 

const PROMPT:string= "You are an AI Assistant, you will recieve a string from user and your job is to rewrite that text in a professional way. Don't say hi/hello just rewrite and make the text super professional. "

export async function professionalUsecase(text:string){
const res = await openAI(PROMPT, text);
return res;

}