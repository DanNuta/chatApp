import React, {createContext, useState, PropsWithChildren} from "react";
import {AuthentificationModel} from "../models/authentification.model";
import {userDataAuthentificationModel} from "../models/userDataAuthentification";

export const Authentification = createContext<userDataAuthentificationModel | null>(null);




export const AuthentificationContext: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const [user, setUser] = useState<AuthentificationModel | null>(null);

    const updateStateUser = (user: AuthentificationModel) =>{

        setUser(user)

    }


    return (

         <Authentification.Provider value={{user, updateStateUser}}>
            {props.children}
         </Authentification.Provider>

    )

}