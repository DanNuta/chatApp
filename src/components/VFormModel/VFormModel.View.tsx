import React, {PropsWithChildren} from "react";
import * as Style from "./VFormModel.style";


export const VFormModelView: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    return (
        <Style.ModelForm>{props.children}</Style.ModelForm>
    )
}