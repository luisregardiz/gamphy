import React from 'react'
import styled from 'styled-components';
import Gifs from '../Gifs/Gifs'

const ListGifs = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5px;

    
`




const ListOfGifs = ({gifs}) => {
   
    return (

        <ListGifs>
            {
                gifs.map( ({id, title, url}) => 
                    <Gifs
                        key={id}
                        id={id} 
                        title={title} 
                        url={url} 
                    />
                )
            }
        </ListGifs>

        
    )
}

export default ListOfGifs
