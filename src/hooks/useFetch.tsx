import React, {useState, useEffect} from "react";
import axios from "axios";


export const useFetch = (data: any, url: string) =>{

    const [response, setResponse] = useState();
    const [isPending, setIsPending] = useState<boolean | null>(null)


    useEffect(() =>{

        console.log("USEEFFECT")
        setIsPending(true)

       axios.post(url, data)
                     .then(res => {
                        setResponse(res.data)

                        console.log(res.data)
                        setIsPending(false)
                     })
    }, [url])



    return {response, isPending}
}