import React, { Component } from 'react';
import { Button, FormGroup, FormControl,  } from 'react-bootstrap';
import video from './hero_video.mp4';

class Hero extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      header: "Coming Soon",
      description: " Tijuana's first inclusive cage-free dog daycare and boarding service.",
      email: ""
    }
  }

  handleChange(e) {
    this.setState({ email: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    // Deconstruct the variables to make it easier to read
    let {header, description} = this.state

    return (
      <div className="Hero">

        <video id="background-video" loop muted autoPlay>
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
            Your browser does not support the video tag.
        </video>

        <cover>
          <h1 id="header">{header}</h1>
          <h2 id="description">{description}</h2>
          <form className="signup-form">
            <FormGroup className = 'form-item' controlId="email">
              <label id="email"></label>
              <FormControl
                id="email-form"
                value={this.state.email}
                bsSize="large"
                type="email"
                onChange={this.handleChange}
                placeholder="Enter your email address"
              />
            </FormGroup>
            <Button id="signup-btn" type="submit" className="btn btn-info"> Sign Up</Button>
          </form>
        </cover>
      </div>
    );
  }
}

export default Hero;
