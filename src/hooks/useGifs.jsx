import { useEffect, useState, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";


const useGifs = ({keyword} = {keyword: ''}) => {

    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifsContext);
 

    useEffect(() => {
        setLoading(true)

        //Recuperamos la keyboard del localstorage, si no hay busca random
        const keywordToUse = keyword  || localStorage.getItem('lastKeyword') || 'dogs'

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)

            //Guardamos la ultima keyword en el localstorage
            localStorage.setItem('lastKeyword', keyword)
            
            
        })
    }, [keyword, setGifs])
    

    return {loading, gifs}
}

export default useGifs
