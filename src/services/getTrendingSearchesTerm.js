import { API_KEY, API_URL } from "./settings";




export default function getTrendingTerms() {
    const URL = `${API_URL}/trending/searches?api_key=${API_KEY}`

    return fetch(URL)
            .then(res => res.json())
            .then() 

    
}


