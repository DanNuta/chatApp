import React, {PropsWithChildren, useState} from "react";
import {BookModel} from "../../models/book.model";
import axios from "axios";
import { VSendRecenzii } from "../../components/VSendRecenzii/VSendRecenzii";
import * as Style from "./Book.style";
import {Link} from "react-router-dom";
import { VShowAvatarRecenzii } from "../../components/VShowAvaratRecenzii/VShowAvatarRecenzii.View";
import "./Book.style.scss";

type Props = {
    bookData: BookModel | null,
    id?: string,
    mouseEnterAutor: () => void,
    mouseLeaveAutor: () => void,
    autorState: boolean
}





export const BookView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    const autor = {
        avatar: props.bookData?.avatar_autor,
        nume: props.bookData?.nume
    }

   

    return (
        (
           <Style.Book>

                <Style.Title>{props.bookData?.title}</Style.Title>

                <Style.BookContainer>
                    
                    <Style.BookImg>
                        <Style.Img src={`http://localhost/librarius/images/${props.bookData?.img}`} />
                    </Style.BookImg>


                    <Style.TableElement>


                        <tr>
                            <td onMouseEnter={props.mouseEnterAutor} onMouseLeave={props.mouseLeaveAutor}>Avatar autor</td>
                            <td>Nume autor</td>
                            <td>Editura</td>
                            <td>Pret</td>
                            <td>Pagini</td>
                            <td>Descriere</td>
                            <td>Anul</td>
                            <td>Genul cartii</td>
                        </tr>

                     <tr>
                        <td className="autor" onMouseEnter={props.mouseEnterAutor} onMouseLeave={props.mouseLeaveAutor}><Link to={`autor/${props.bookData?.autor_id}`}><img src={`http://localhost/librarius/images/${props.bookData?.avatar_autor}`}/></Link></td>
                        <td className="name">{props.bookData?.nume}</td>
                        <td>{props.bookData?.id_editura}</td>
                        <td>{props.bookData?.pret}</td>
                        <td>{props.bookData?.pagini}</td>
                        <td>{props.bookData?.descriere}</td>
                        <td>{props.bookData?.anul}</td>
                        <td>{props.bookData?.gen_produs}</td>


                     </tr>

                    {props.autorState && <VShowAvatarRecenzii  class={"90px"}  data={autor}/>}
                        
                    </Style.TableElement>




                </Style.BookContainer>


                


                <VSendRecenzii id={props.id}/>
           </Style.Book> 
        )
    )
}