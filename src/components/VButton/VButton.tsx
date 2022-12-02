import React, {PropsWithChildren, useState} from "react";
import {VButtonView} from "./VButton.View";
import {ButtonModel} from "../../models/button.model";



export const VButton: React.FC<PropsWithChildren<ButtonModel>> = (props: PropsWithChildren<ButtonModel>) =>{

    return (

        <VButtonView {...props}></VButtonView>
    )
}