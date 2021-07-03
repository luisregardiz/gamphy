import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import getTrendingTerms from '../../services/getTrendingSearchesTerm';


const Trends = styled.div`
    background-color: transparent;
    margin: 1.5em 0 ;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`
const TrendsList = styled.span`
    text-align: center;
    color: var(--pink);
    cursor: pointer;
    list-style: none;
    margin: .55em;
    padding: .6em;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: 600;
    color: var(--white);
    letter-spacing: 1px;
    box-shadow: var(--shadowNeonMinimal);

        @media(max-width: 960px){
            margin: 1em .5em;
        }
    
`


const TrendingSearchesTerms = () => {

    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTrendingTerms()
            .then(res => {
                const {data = []} = res
                return setTrends(data)
            })

    }, [])

    return (
        <Trends>
            {trends.map( (trend, index) => {
                return (
                    <Link key={index} to={`/${trend}`}>
                        <TrendsList>{trend}</TrendsList>
                    </Link>
                )
            })}
        </Trends>
    )
}

export default TrendingSearchesTerms;