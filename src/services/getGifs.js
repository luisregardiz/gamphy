import { API_KEY, API_URL } from "./settings";

//Verificar si la api que estamos recibiendo es un array



export default function getGifs({keyword = 'cats'} = {}) {
    const URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`;

    return fetch(URL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}


const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    if(Array.isArray(data)) {
        const gifs = data.map( img => {
            const { images, title, id} = img
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }
    return []
  
}