import React, { PropsWithChildren } from "react";
import {VInputView} from "./VInput.View";
import {InputModel} from "../../models/input.model";

export const VInput: React.FC<PropsWithChildren<InputModel>> = (props: PropsWithChildren<InputModel>) =>{

    return (
        <VInputView {...props}>
            {props.children}
        </VInputView>

    )
}