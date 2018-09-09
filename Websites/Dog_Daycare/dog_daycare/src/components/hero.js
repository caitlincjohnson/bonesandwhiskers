import React, { Component } from 'react';
import { Button, FormGroup, FormControl,  } from 'react-bootstrap';
import video from './hero_video.mp4';

class Hero extends Component {

  render() {
    return (
      <div className="Hero">

        <video id="background-video" loop muted autoPlay>
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
            Your browser does not support the video tag.
        </video>

        <cover>
          <h1>Coming soon</h1>
          <h2>Tijuanas first cage-free dog daycare</h2>
          <form className="signup-form">
            <FormGroup className = 'form-item' controlId="email">
              <label id="email"></label>
              <FormControl
                id="email-form"
                bsSize="large"
                type="email"
                placeholder="Enter your email address"
              />
            </FormGroup>
            <Button id="signup-btn" type="submit" className="btn btn-info" onClick = {this.handleSubmit}> Sign Up</Button>
          </form>
        </cover>
      </div>
    );
  }
}

export default Hero;
