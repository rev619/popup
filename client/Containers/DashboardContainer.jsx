import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // React Router
import { connect } from 'react-redux';
// REQUIRED FOR ASYNC/AWAIT BUT NOT LISTED IN PACKAGE.JSON
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import { showModal } from '../actions/actions';
import SideBar from '../Components/DashboardSideBar/SideBar.jsx';
import Events from '../Components/DashboardEvents/Events.jsx';
import { CREATE_EVENT_MODAL } from '../constants/modaltypes'
import  {getEvents} from '../actions/actions';

const mapStateToProps = store => ({
  events: store.events.events,
});

// TO TRY:
// const getEventsAndDispatch = () => async (dispatch) => {
//   const results = await fetch('/api/');
//   return dispatch(getEvents(events));
// }

const getEventsAndDispatch = () => dispatch => fetch('/api/')
  .then(events => dispatch(getEvents(events)));

const mapDispatchToProps = dispatch => ({
  loadEvents: () => dispatch(getEventsAndDispatch),
  showModal: modelType => dispatch(showModal(modelType)),
});

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.showCreateEventBox = this.showCreateEventBox.bind(this);
  }

  showCreateEventBox() {
    this.props.showModal(CREATE_EVENT_MODAL);
  }

  componentDidMount() {
    // async await requires core-js and regenerator runtime for the polyfill
    // CURRENTLY NOT WORKING, TRY THE COMMENTED OUT DEFINITON OF GETEVENTSANDDISPATCH
    // console.log('getting events....');
    // const get = async () => {
    //   await this.props.loadEvents();
    //   console.log(this.props.events);
    // };
    // get();
  }

  render() {
    console.log(this.props.events);
    return(
      <div className="dashboardWrapper">
        {/* <p>hello from inside the wrapper</p> */}
        <SideBar createEvent={this.showCreateEventBox} />
        <Events createEvent={this.showCreateEventBox} events={this.props.events} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
