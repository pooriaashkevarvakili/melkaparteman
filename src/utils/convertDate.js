import moment from "jalali-moment";
import { toFarsiNumber } from "./convertNumber";
export const convertDateMiladiToShamsi=(date,showTime=false,inputFormatDate="YYYY-MM-DD",outputFormatDate='YYYY/MM/DD', inputFormatTime='HH:mm:ss.SSS', outputFormatTime='HH:mm:ss')=>{
    const solarDate = toFarsiNumber(moment(date,inputFormatDate).locale('fa').format(outputFormatDate));
    if(showTime){
        const convertedTime=toFarsiNumber(moment(date,inputFormatTime).format(outputFormatTime))
        return{
            Date:solarDate,
            Time:convertedTime
        }
    }
    return{
        Date:solarDate,
    }    
}