import React, {PropsWithChildren, useState, useEffect} from "react";
import {VSearchBookView} from "./VSearchBook.View";
import axios from "axios";

export const VSearchBook: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{



    const [numerBooks, setNumberBooks] = useState(0);
    const [searchBook, setSearchBook] = useState<string | null>(null)


    useEffect(() =>{
        axios.get("http://localhost/librarius/number_books.php").then(rez => setNumberBooks(rez.data))
    }, [])



    const searchData = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const value = e.currentTarget.value;
        setSearchBook(value)

    }


    const sendDataToBD = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();

        console.log(searchBook)

    }

    return (
        <VSearchBookView searchFn={searchData}
                         numerBooks={numerBooks}
                         sendDataToBD={sendDataToBD}
        >
            {props.children}
        </VSearchBookView>
    )
}