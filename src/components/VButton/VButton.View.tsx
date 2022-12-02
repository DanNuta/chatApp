import React, {PropsWithChildren, useState} from "react";
import * as Style from "./VButton.style";
import {ButtonModel} from "../../models/button.model";

export const VButtonView: React.FC<PropsWithChildren<ButtonModel>> = (props: PropsWithChildren<ButtonModel>) =>{

    return (
        <Style.Button onClick={props.onClick}>{props.text}</Style.Button>
    )
}