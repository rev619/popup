import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import HostedEvents from './HostedEvents.jsx';


class SideBar extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    // const hostedEventsArr = [];
    // for (let i = 0; i < Data.length; i++) {
    //   hostedEventsArr.push();
    // }

    return (
      // <p>hello from inside controls panel</p>
      <div className='controlsWrapper'>
        <Button color="primary" size="lg" block>Home</Button>
        <Button color="primary" size="lg" block>Settings</Button>
        <Button onClick={this.props.createEvent}color="primary" size="lg" block>Create Event</Button>
        <h3>Hosted Events</h3>
        <HostedEvents />
        <HostedEvents />
        <HostedEvents />
        <Button color="primary" size="lg" block>Log Out</Button>
      </div>
    );
  }
}

export default SideBar;
