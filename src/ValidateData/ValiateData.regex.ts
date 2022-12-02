

export const pattern = {
    nume: /^\w{1,10}$/,
    email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/,
    password: /^\w{1,10}$/

}





export const matchRegEx = (field: string, 
                            regEx: RegExp, 
                            target: React.Dispatch<React.SetStateAction<string>>, 
                            errorField: React.Dispatch<React.SetStateAction<string | null>>,
                            errorMessage: string
                            ) =>{

    if(regEx.test(field)){
        target(field);
        errorField(null)
    }else{
        errorField(errorMessage)
    }
}