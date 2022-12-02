import React, {PropsWithChildren} from "react";
import { VButton } from "../VButton/VButton";
import { VInput } from "../VInput/VInput";
import * as Style from "./VSendRecenzii.style";
import {RecenzieModel} from "../../models/recenzie.model";
import {VRecenziiUser} from "../../components/VRecenziiUser/VRecenziiUser";



type Props = {
    send: (e: React.MouseEvent<HTMLButtonElement>) => void,
    addRecenzie: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errRecenzie: string,
    recenzie: string,
    recenziiBook: RecenzieModel[]
}



export const VSendRecenziiView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    return (
       
        <Style.FormRecenzii>

            {props.recenziiBook &&  props.recenziiBook.map((item, i) =>{
                return (
                            <VRecenziiUser data={item} key={i}/>
                      )

            })}

                    <VInput type="text" 
                            onChange={props.addRecenzie} 
                            value={props.recenzie}/>

                    <VButton text="Send recenzie" onClick={props.send}/>
        </Style.FormRecenzii>
    )
}