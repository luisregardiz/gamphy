import React from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'


const ImgGif = styled.img`
    height: 100% !important;
    width: 100% !important;
    object-fit: cover;
    padding: .25em;
    border-radius: 15px;
    cursor: pointer;
    transition: var(--smooth);

        &:hover {
            opacity: 80%;
            border: 2px solid var(--primary);
        }
`

const List = styled.div`

    color: var(--secondary);
    


`

const Gifs = ({id, title, url}) => {
    return (
        <List>
            <Link to={`/gif/${id}`}>
                <ImgGif src={url} alt={title}/>
            </Link>
            
        </List>
    )
}



export default Gifs
