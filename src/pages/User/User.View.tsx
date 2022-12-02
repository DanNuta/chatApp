import React, {PropsWithChildren} from "react";
import {AuthentificationModel} from "../../models/authentification.model";
import {VSideAvatarCont} from "../../components/VSideAvatarCont/VSideAvatarCont";
import {Routes, Route} from "react-router-dom";
import { General } from "./UserData/General/General";





export const UserView: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    return (

        <>


        <VSideAvatarCont/>

        <Routes>
            <Route path="general" element={<General/>}/>
        </Routes>

        </>
    )
}