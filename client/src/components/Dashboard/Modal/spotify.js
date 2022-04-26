import React, { Component } from 'react';
import PlayWidget from 'react-spotify-widgets';
 
class Spotify extends Component { 
render () {
    return (
      <div className='Spotify'>
        <PlayWidget
          width={400}
          height={500}
          uri={'https://open.spotify.com/playlist/0j0ltdnke7FIZ8zjUe5vhO?si=cb7a146c52744c90'}
          viewCoverArt={true}
        />
      </div>
    );
  }
}

export default Spotify;