import React, { useState, useEffect } from 'react';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './Componentes/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './Componentes/Home';
import People from './Componentes/People';
import Favorite from './Componentes/Favorite';


function App() {
  const [people, setPeople] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [loanding, setLoanding] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.result);
      setLoanding(false);
    }

    async function fetchFavorite() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setFavorite(data.result);
      setLoanding(false);
    }

      fetchPeople();
      fetchFavorite();
      
  }, [])
  return (
    <>
      <Router>
        <Navbar/>
        <Container>
          {loanding ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path='/'> <Home/> </Route>
              <Route exact path='/people'> <People data={people} /> </Route>
              <Route exact path='/favorite'> <Fav data={Favorite} /> </Route>
            </Switch>
          )}
          
        </Container>
      </Router>
    </>
  );
}

export default App;