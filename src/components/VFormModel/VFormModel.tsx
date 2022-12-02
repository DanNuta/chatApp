import React, {PropsWithChildren} from "react"
import {VFormModelView} from "./VFormModel.View";


export const VFormModel: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    return (
        <VFormModelView>{props.children}</VFormModelView>
    )
}