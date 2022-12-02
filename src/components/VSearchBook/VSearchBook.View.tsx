import React, {PropsWithChildren, useEffect, useState} from "react";
import { VInput } from "../VInput/VInput";
import * as Style from "./VSearchBool.style";
import axios from "axios";
import { VButton } from "../VButton/VButton";


type Props = {
    searchFn: (e: React.ChangeEvent<HTMLInputElement>) => void,
    sendDataToBD: (event: React.MouseEvent<HTMLButtonElement>) => void
    numerBooks: number
}


export const VSearchBookView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    

    return (
        <div>
            <VInput type="text" placeholder={`Cautati prin ${props.numerBooks} de carti`} onChange={props.searchFn}/>
            <VButton text="Cauta" onClick={props.sendDataToBD}/>
        </div>
    )
}