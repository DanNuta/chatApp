import React, { PropsWithChildren } from "react";
import {InputModel} from "../../models/input.model";
import * as Style from "./Vinput.style";

export const VInputView: React.FC<PropsWithChildren<InputModel>> = (props: PropsWithChildren<InputModel>) =>{

    return (

        <>
            <Style.Input className={props.class} onChange={props.onChange} type={props.type} placeholder={props.placeholder} value={props.value} />
            <Style.ErrorInput>{props.error}</Style.ErrorInput>
        </>
    )

}