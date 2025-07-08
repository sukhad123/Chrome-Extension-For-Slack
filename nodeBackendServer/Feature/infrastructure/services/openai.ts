import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI,  
});

export async function openAI(prompt:string, input:string)
{
try{
const response = await client.responses.create({
  model: 'gpt-4',
  instructions: prompt,
  input: input,
});
return response.output_text;
}catch(err)
{
    return err;
}

 
}