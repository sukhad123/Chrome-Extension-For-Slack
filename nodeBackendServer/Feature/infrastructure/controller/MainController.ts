{/**Main Controller of the app */}
import { professionalUsecase } from "../../core/usecases/ProfessionalResponse"
import { genzUseCase } from "../../core/usecases/GenzResponse";
export async function mainController(text: string, type: string) {
   
    //read and redirect as required
    if(type === 'genz'){
        const res = await genzUseCase(text);
        return res;
        //TODO implement the genz call
    }
    else{
        
       const res = await professionalUsecase(text);
       return res;
        
        //TODO implement the professional call
    }

}