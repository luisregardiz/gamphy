import React from 'react'
import { Route } from 'wouter'
import Home from './pages/Home/Home';
// import SearchResult from './pages/SearchResult/SearchResult';
import Detail from './pages/Detail/Detail';
import SearchResult from './pages/SearchResult/SearchResult';
import { GifsContextProvider } from './context/GifsContext';
import Header from './components/Header/Header';
import styled from 'styled-components';
import Trending from './components/Trending/Trending';

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 1em;


`
const Wrapper = styled.div`
  margin: 0 2em;
  display: grid;
  grid-template-columns: 75% auto;
    @media(max-width: 960px) {
      grid-template-columns: 1fr;
      
    }

`
function App() {


  return (
    <Container>
      
        <Header/>
        <GifsContextProvider>
          
          <Wrapper>
            
            <Route 
              component={Home} 
              path="/"
              />
              
            <Route 
              component={SearchResult} 
              path="/:keyword"
              />
            <Route 
            component={Detail} 
            path="/gif/:id"
            />
            <Trending/>
          </Wrapper>

          </GifsContextProvider>

    </Container>
  );
}

export default App; 
