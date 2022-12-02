import React, {PropsWithChildren, useContext} from "react";
import {UserView} from "./User.View";






export const User: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

   
 
    return (
        <UserView >
            {props.children}
        </UserView>
    )
}