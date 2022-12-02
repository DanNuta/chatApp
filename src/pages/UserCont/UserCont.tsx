import React, {PropsWithChildren, useEffect, useState} from "react";
import {UserContView} from "./UserCont.View";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {UserForeignModel} from "../../models/userForeign";







export const UserCont: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const {id} = useParams();

    const navigate = useNavigate();

    const [user, setUser] = useState<UserForeignModel | null>(null);



    useEffect(() =>{
        axios.get(`http://localhost/librarius/get_user_data.php?user_id=${id}`)
          .then(res =>{ 
            setUser(res.data)
        })
    }, [])



    const messageFn = () =>{

        
           localStorage.setItem("id_destination", JSON.stringify(user));

          

            navigate("/messages")

           
        }

        
    




    return (
        <UserContView   userData={user}
                        messageFn={messageFn}  
        >
            {props.children}
        </UserContView>
    )
}