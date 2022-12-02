import {BookModel} from "./book.model";



export type BooksModelContext = {
    book: BookModel[] | null,
    booksFn: (data: BookModel[]) => void,
    filterBookCategory: (c: string) => void,
    filterData: BookModel[] | null
}