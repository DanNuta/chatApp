import React, {PropsWithChildren, useContext, useState} from "react";
import {GeneralView} from './General.View';

import {AuthentificationModel} from "../../../../models/authentification.model";
import {userDataAuthentificationModel} from "../../../../models/userDataAuthentification";
import {Authentification} from "../../../../context/Authentification.context";


import {ModelContext} from "../../../../context/Modal.context";
import {ModalContextModel} from "../../../../models/modelContext.model";




type Props = {
    user?: AuthentificationModel | null,
 
}

export const General: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const {user} = useContext(Authentification) as userDataAuthentificationModel;


    const {model, changeModelStateFn} = useContext(ModelContext) as ModalContextModel;

    

    return (

        <GeneralView user={user}
                     openModel={model}
                     setOpenModel={changeModelStateFn}
        >
            {props.children}
        </GeneralView>
    )
}