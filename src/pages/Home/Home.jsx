import React from 'react';
import styled from 'styled-components';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spinner/Spinner';
import useGifs from '../../hooks/useGifs';



//Estilos

const GifsHome = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 960px;   
`
const Title = styled.p`
    align-self: flex-start;
    background: var(--secondary);
    border: solid 2px var(--primary);
    padding: 1em;
    border-radius: 50px;
    font-size: .8em;
    text-transform: uppercase;
    font-weight: 800;
    margin: 0 0 2em 0;
    color: var(--white);
    box-shadow: var(--shadowNeon);
    
`





const Home = () => {
    //funciones

    
    const { loading, gifs} = useGifs()

    //Renderizado del componente
    return (
        <div>
            <GifsHome>
                <Title>Latest searches</Title>
                {loading ? <Spinner/> : <ListOfGifs gifs={gifs}/>}
            </GifsHome>
        </div>
    )
}



export default Home
