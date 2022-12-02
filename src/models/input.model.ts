

export type InputModel = {
    type?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    min?: string,
    max?: string,
    error?: string | null
    value?: string,
    id?: string,
    class?: string
}