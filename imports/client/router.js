import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// import ga from 'react-ga';
// ga.initialize('UA-54446573-9');

function logPageView() {
  //ga.pageview(window.location.pathname);
}

import {
  Router,
  Route,
  Link,
  browserHistory,
  IndexRedirect,
} from 'react-router';

import App from '/imports/client/templates/App.jsx';
import Layout from '/imports/client/templates/Layout.jsx';
import Home from '/imports/client/templates/Home.jsx';
import Devices from '/imports/client/templates/Devices.jsx';
import Map from '/imports/client/templates/Map.jsx';
import Profile from '/imports/client/templates/Profile.jsx';

var main = function () {
  var routes = (
    <Route path="/" component={App}>
      <Route component={Layout}>
       	<IndexRedirect to="/home" />
        <Route path='/home' area='home' title='Home' component={Home} />
        <Route path='/devices' area='devices' title='Dispositivos' component={Devices} />
        <Route path="/map" area='map' title='Mapa' component={Map} />
        <Route path="/profile" area='profile' title='Perfil' component={Profile} />
      </Route>
    </Route>
  );
  
  ReactDOM.render(<Router onUpdate={logPageView} history={browserHistory}>{routes}</Router>, document.getElementById('app')) ;
};

if (typeof Meteor !== 'undefined') {
  Meteor.startup(main);
} else {
  main();
}
