import React, {PropsWithChildren, useState} from "react";
import {VInputPasswordView} from "./VInputPassword.View";
import {InputModel} from "../../models/input.model";


export const VInputPassword: React.FC<PropsWithChildren<InputModel>> = (props: PropsWithChildren<InputModel>) =>{


   
    const [showHidePassword, setShowHidePassword] = useState(false);

    const hideShowPassword = () =>{
        setShowHidePassword(prev => {
            return !prev
        })
    }
    return (

       <VInputPasswordView stateHide={showHidePassword}
                           hideShowPassword={hideShowPassword}
                           input={{...props}}
                            >
            {props.children}
       </VInputPasswordView>
    )


}