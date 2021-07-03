import React from 'react'
import styled from 'styled-components';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spinner/Spinner';
import useGifs from '../../hooks/useGifs';

const GifsResult = styled.div`
    max-width: 960px;
    display: flex;
    flex-direction: column;

    
`

const Title = styled.p`
    align-self: flex-start;
    background: transparent;
    border: solid 2px var(--primary);
    padding: 1em;
    border-radius: 50px;
    font-size: .8em;
    text-transform: uppercase;
    font-weight: 800;
    margin: 0 0 2em 0;
    color: var(--white);
    letter-spacing: 1px;
    box-shadow: var(--shadowNeon);
`


const SearchResult = ({params}) => {
    const {keyword} = params
    const { loading, gifs } = useGifs({ keyword })

    const resultGif = decodeURI(keyword);
    
     //El params es por wouter, En esta seccion usaremos custom Hooks
    

    return (
        <GifsResult>
            <Title>Results of "{resultGif}"</Title>
            {loading ? <Spinner/> : <ListOfGifs gifs={gifs}/>}   
        </GifsResult>
    )
}

export default SearchResult
