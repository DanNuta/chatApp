import React, {createContext, PropsWithChildren, useState} from "react";
import {BooksModelContext} from "../models/BooksContext.model";
import {BookModel} from "../models/book.model";


export const BookContext = createContext<BooksModelContext | null>(null);

export const BookContextProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const [book, setBook] = useState<BookModel[] | null>(null);

    const [filterData, setFilterData] = useState<BookModel[] | null>(null)

    const data = book;

    const booksFn = (data: BookModel[]) =>{
        setBook(prev => data)
        setFilterData(data)
    }


    const filterBookCategory = (c: string) =>{
        
        if(book !== null){
            const filter = book;

            const newArray = filter?.filter(item => {

                switch(c){
                    case "all":
                        return true
                    case c:
                       return item.gen_produs == c
                        
                }

            });

            setFilterData(prev => newArray)

           

           
        }

        

        
    }

    return (
        <BookContext.Provider value={{book, booksFn, filterBookCategory, filterData}}>
            {props.children}
        </BookContext.Provider>
    )
}