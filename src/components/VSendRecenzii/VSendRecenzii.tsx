import React, {PropsWithChildren, useState, useEffect} from "react";
import {VSendRecenziiView} from "./VSendREcenzii.View";
import axios from "axios";
import {RecenzieModel} from "../../models/recenzie.model";

type Props = {
    id?: string
}

export const VSendRecenzii: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    const [recenzie, setRecenzie] = useState("");
    const [errRecenzie, setErrRecenzie] = useState("");

    const [recenziiBook, setRecenziiBook] = useState<RecenzieModel[]>([]);



    useEffect(() => {

        axios.get(`http://localhost/librarius/add_recenzie.php?id=${props.id}`)
        .then(res => {
            setRecenziiBook(res.data)

        });
      
    
      
    }, [])
    


    




    const addRecenzie = (e: React.ChangeEvent<HTMLInputElement>) =>{
      
            setRecenzie(e.currentTarget.value);
      
    }




    const send = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();


        if(recenzie === ""){
            return;
        }


        const form = new FormData;
        const id_user = localStorage.getItem("user_id");

        if(props.id !== undefined && id_user !== null){


            form.append("recenzie", recenzie);
            form.append("id", props.id)
            form.append("user_id", id_user);
        }


        axios.post("http://localhost/librarius/add_recenzie.php", form)
           .then(res => {
            setRecenziiBook(res.data)

           
        });

           setRecenzie("");
    }


    return (
        <VSendRecenziiView  send={send}
                            addRecenzie={addRecenzie}
                            errRecenzie={errRecenzie}
                            recenzie={recenzie}
                            recenziiBook={recenziiBook}
        >
            {props.children}
        </VSendRecenziiView>
    )
}