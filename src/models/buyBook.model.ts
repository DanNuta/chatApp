


import {BookModel} from "./book.model";

export type BuyBookModel = {
    buyBook: BookModel[],
    addNewBuyBook: (data: BookModel) => void,
    total: number,
    deleteItem: (id: string) => void
}