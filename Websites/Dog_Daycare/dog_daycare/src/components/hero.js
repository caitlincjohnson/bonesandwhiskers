import React, { Component } from 'react';
import video from './hero_video.mp4'

class Hero extends Component {

  render() {
    return (
      <div className="Hero">
        <video id="background-video" loop muted autoPlay>
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
        <h1>Coming soon</h1>
        <h2>Tijuana's first cage-free dog daycare</h2>
      </div>
    );
  }
}

export default Hero;
