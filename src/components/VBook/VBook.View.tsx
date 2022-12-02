import React, {PropsWithChildren} from "react";
import * as Style from "./VBook.style";
import {BookModel} from "../../models/book.model";
import {Link} from "react-router-dom";


type Props = {
    data: BookModel,
    addNewBuyBook: (data: BookModel) => void
}


export const VBookView : React.FC<PropsWithChildren<Props>>= (props: PropsWithChildren<Props>) =>{


  
    return (
      <Style.Book>
        <Link to={`${props.data.id_book}`}>

            <Style.BookElement>
        <Style.Img src={`http://localhost/librarius/images/${props.data.img}`}/>
        <Style.Title>{props.data.title}</Style.Title>
        <Style.Paragraph>{props.data.pret} lei</Style.Paragraph>

        </Style.BookElement>

        </Link>
        <button onClick={() => props.addNewBuyBook(props.data)}>add to bue</button>
      </Style.Book>
    )
}