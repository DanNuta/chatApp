


export type BookModel = {
    id_book: string,
    descriere?: string,
    gen_produs?: string,
    img?: string,
    title?: string,
    pret: number,
    pagini?: string,
    anul?: string,
    autor_id?: string,
    id_editura?: string,
    avatar_autor?: string,
    nume?: string,
    count: number
}



export type AutorModel = {
    autor_id?: string,
    avatar_autor?: string,
    nume?: string
}