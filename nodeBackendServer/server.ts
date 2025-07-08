import { mainController } from './Feature/infrastructure/controller/MainController';

import express, { Request, Response } from 'express'
import cors from 'cors'
const port = process.env.PORT || 3000;

const app = express();
 
app.use(cors());
app.use(express.json());
//it will make a call
app.post('/api', async (req: any, res: any) => {
    
    const { text, style } = req.body;
    const value = await mainController(text, style);
   console.log(value);
    return res.json({ text: value });
    
});
//test
app.get('/',(req:any,res:any)=>{
    return res.json("hi this is sukhad backend");
})
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://:${port}/`);
});
