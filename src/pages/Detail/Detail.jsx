import React, { useContext } from 'react'
import Gifs from '../../components/Gifs/Gifs';
import GifsContext from '../../context/GifsContext';



//Utilizamos useContext para tener el context antes creado

const Detail = ({params}) => {
    const {gifs} = useContext(GifsContext)

    const gifDetail = gifs.find( gif => gif.id === params.id)
    
    return (
        <div>
            <Gifs {...gifDetail} />
        </div>
    )
}

export default Detail
