import React, { createContext, useState, PropsWithChildren } from "react";
import { BuyBookModel } from "../models/buyBook.model";
import { BookModel } from "../models/book.model";

export const BuyCardContext = createContext<BuyBookModel | null>(null);




export const BuyContext: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {

  const [buyBook, setBuyBook] = useState<BookModel[]>([]);



  const total = buyBook.reduce((accumulator, curentValue) => {
    return accumulator + Number(curentValue.pret * curentValue.count);
}, 0)


    const deleteItem = (id: string) => {

        setBuyBook(prev => {
            const newArray = prev.filter(item => item.id_book !== id)

            return newArray;
        })

    }






  const addNewBuyBook = (data: BookModel) => {

    const exist = buyBook.some(item => item.id_book === data.id_book);
    const element = exist ?
                    buyBook.map(item => item.id_book === data.id_book ? {...item, count: item.count+1} : item) :
                    [...buyBook, {...data, count: 1}];

    setBuyBook(prev => element)

 
  

  
   
  

  };

  return (
    <BuyCardContext.Provider value={{ buyBook, addNewBuyBook, total, deleteItem}}>
         {props.children}
    </BuyCardContext.Provider>
  )

};
