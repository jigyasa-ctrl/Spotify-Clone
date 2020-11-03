import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login'
import {getTokenFromUrl} from './Spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useDataLayerValue } from './DataLayer'

//to interact with the spotify songs and playlists we used this package
const spotify = new SpotifyWebApi();

function App() {

//const [token, setToken] = useState(null);
//pulling from data layer
//dispatch is used to update values in the datalayer
//pulling user from datalayer
const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    //to grab token as soon as it returns from spotify
const hash = getTokenFromUrl();
//to remove token from url
window.location.hash = ''
const _token = hash.access_token;

if(_token) {
   dispatch({
     type: "SET_TOKEN",
     token: _token
   })

  //setToken(_token);

  spotify.setAccessToken(_token) //gives token to access spotify
  
  //to check if it's us
  spotify.getMe().then(user => {
    
    dispatch({
      type: 'SET_USER',
      user: user,
    });
  });

  //to get playlists from spotify api
  spotify.getUserPlaylists().then((playlists)=> {
    dispatch({
      type: "SET_PLAYLISTS", //this is action
      playlists: playlists,
    })
  });

  spotify.getPlaylist('addlinkhere').then(response => {
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: response,
    })
  })
}


  }, [])

  
  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
         
          <Login />
        )
      }
    
   
    </div>
  );
}

export default App;
