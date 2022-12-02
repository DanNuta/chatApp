import React, {PropsWithChildren} from "react";
import {InputModel} from "../../models/input.model";
import * as Style from "./VInputPassword.style"


type Props = {
    hideShowPassword: () => void, 
    input: InputModel,
    stateHide: boolean,
}
export const VInputPasswordView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return (
        
        <Style.HidePasswordDiv>
            <Style.Imput onChange={props.input.onChange} placeholder={props.input.placeholder}  type={props.stateHide ? "text" : "password"} />
            <Style.IconHide onClick={props.hideShowPassword}></Style.IconHide>
            <Style.ErrorPassword>{props.input.error}</Style.ErrorPassword>
        </Style.HidePasswordDiv>
       
    )
}