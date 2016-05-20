import React from 'react';
import { browserHistory } from 'react-router'

import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


var Layout = React.createClass({
	getInitialState: function () {
		return {
		  location: '/home',
		}
	},

	handleNav(v) {
		browserHistory.push('/'+v);
	},

  getValue() {
  	return this.props.children.props.route.area;
  },

  getTransitionName() {
  	const location = this.props.location;
    return (location.action === 'POP') ? 'nav-swap-prev' : 'nav-swap-next';
  },

	render() {
		let wWidth = window.innerWidth;

    return (
      <div>
      	<header>
	      	<AppBar title={ this.props.children.props.route.title } zDepth={0} />

				  <Tabs onChange={this.handleNav} value={this.getValue()}>
				    <Tab value="home" 	 icon={<ActionFlightTakeoff />} />
				    <Tab value="devices" icon={<ActionFlightTakeoff />} />
				    <Tab value="map" 		 icon={<ActionFlightTakeoff />} />
				    <Tab value="profile" icon={<ActionFlightTakeoff />} />
				  </Tabs>
			  </header>
				  
				<ReactCSSTransitionGroup transitionName={ this.getTransitionName() } transitionEnterTimeout={300} transitionLeaveTimeout={200} >
        	{React.cloneElement(this.props.children, { key: this.props.children.props.route.area })}
        </ReactCSSTransitionGroup>

      </div>
    );
  }
});

export default Layout;