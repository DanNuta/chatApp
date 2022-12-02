import React, {PropsWithChildren} from "react"
import {VSideAvatarContView} from "./VSideAvatarCont.View";
import axios from "axios";

export const VSideAvatarCont: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{


    const logOut = () =>{

        const id = localStorage.getItem("user_id");

        axios.get(`http://localhost/librarius/log_out.php?id_user=${id}`)
            .then(res => console.log(res))


        localStorage.setItem("user_id", "null")
    }

    return (
        <VSideAvatarContView logOut={logOut}>
            {props.children}
        </VSideAvatarContView>
    )
}