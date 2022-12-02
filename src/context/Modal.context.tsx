import React, {createContext, PropsWithChildren, useState} from "react";
import {ModalContextModel} from "../models/modelContext.model";


export const ModelContext = createContext<ModalContextModel | null>(null);



export const ModelContextBoolean: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{


    const [model, setModel] = useState(false);



    const changeModelStateFn = () =>{

        setModel(!model)
    }

    return (

             <ModelContext.Provider value={{model, changeModelStateFn}}>
                {props.children}
             </ModelContext.Provider>
    )
}