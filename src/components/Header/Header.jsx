import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'wouter'

//Estilos

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 2em;
    gap: 1em;
    
`

const SectionGifs = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    padding: 1em;
    
    
`
const Logo = styled.h1`
    font-size: 2em;
    color: var(--pink);
    text-transform: uppercase;
    font-weight: 800;
    margin-right: 1em;
    cursor: pointer;

        span {
            color: var(--primary);
        }

        @media(max-width: 960px){
            margin: 0;
        }

`
const PGifs = styled.li`
    background: transparent;
    border: solid 2px var(--primary);
    padding: .5em 1em;
    list-style: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

        &:hover {
            transform: scale(1.1);
            box-shadow: var(--shadowNeon);

            }
        a {
            color: var(--white);
            
            text-decoration: none;
            text-transform: uppercase;
            font-size: .8em;
            font-weight: 700;

        }
        a:visited {
        color: var(--white);
        opacity: 80%;
        }

        @media(max-width: 768px) {
            display: none;
        }
`
const SearchGif = styled.input`
    border: 3px solid var(--pink);
    border-right: none;
    color: var(--white);
    padding: 1em 2em;
    border-radius: 50px 0 0 50px;
    height: 3em;
    font-size: 16px;
    width: 100%;

        &:focus {
            outline: none;
  
        }

`

const SearchBtn = styled.button`
    font-weight: 700;
    height: 3em;
    padding: 1em;
    border: none;
    background-color: var(--pink);
    border-radius: 0 50px 50px 0;
    font-size: 16px;
    transition: var(--smooth);
    cursor: pointer;

        &:hover { opacity: 80%}

`
const Form = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    width: 100%;

`
const POPULAR_GIFS = ['dogs', 'cats', 'funny', 'random'];

const Header = () => {

    
    const [keyword, setKeyword] = useState('');

    const [location, pushLocation] = useLocation();

    

    const handleSubmit = e => {
        e.preventDefault();
        
        pushLocation(`/${keyword}`);
    }

    const handleChange = e => {
        setKeyword(e.target.value);
    }
    return (
        <HeaderContainer>
            <SectionGifs>
                <Link to="/">
                    <Logo>Gam<span>phy</span></Logo>
                </Link>
                {POPULAR_GIFS.map( pGif => (
                    <PGifs key={pGif}>
                        <Link to={`/${pGif}`}>
                            {pGif}
                        </Link>
                    </PGifs>
                ))}
            </SectionGifs>
            <Form onSubmit={handleSubmit}>
                <SearchGif 
                    onChange={handleChange} 
                    type="text" 
                    value={keyword}
                    placeholder="Search GIF"
                    
                    />
                <SearchBtn type="submit">Search</SearchBtn>
            </Form>
        </HeaderContainer>
    )
}

export default Header
