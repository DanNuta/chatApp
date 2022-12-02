import React, {PropsWithChildren, useEffect, useState} from "react";
import {BookView} from "./Book.View";
import axios from "axios";
import {useParams} from "react-router-dom";
import {BookModel} from "../../models/book.model";



export const Book: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const {id} = useParams();

    const [bookData, setBookData] = useState<BookModel | null>(null);

    const [autorState, setAutorState] = useState(false);


    useEffect(() =>{

        axios.get(`http://localhost/librarius/get_single_book.php?id=${id}`)
             .then(res => {
                setBookData(res.data)
                
             })

    }, [])



    const mouseEnterAutor = () =>{
        setAutorState(true)
    }


    const mouseLeaveAutor = () =>{
        setAutorState(false)
    }




   

    return (
        (
            <BookView bookData={bookData}
                      id={id}
                      mouseEnterAutor={mouseEnterAutor}
                      mouseLeaveAutor={mouseLeaveAutor}
                      autorState={autorState}

            >
                {props.children}
            </BookView>
        )
    )
}