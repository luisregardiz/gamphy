import React from 'react';
import styled from 'styled-components';
import TrendingSearchesTerms from './TrendingSearchesTerms'

const TrendingGifs = styled.aside`
    background-color: var(--pink);
    max-height: 100vh;
    width: auto;
    top: 10px;
    position: sticky;
    margin-left: 1em;
    margin-top: .5em;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    overflow-y: auto;

        @media(max-width: 960px) {
            margin: 1em 0 0 0;
            max-height: 100%;
            position: relative;
        }
`
const Title = styled.h1`
    background: transparent;
    color: var(--secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 800;


`

const Trending = () => {


    return (
        <TrendingGifs>
            <Title>Trending</Title>
            <TrendingSearchesTerms/>
        </TrendingGifs>
    )
}

export default Trending
