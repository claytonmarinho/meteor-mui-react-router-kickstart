import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


var App = React.createClass({

render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        {React.cloneElement(this.props.children)}
      </MuiThemeProvider>
    );
  }
});

export default App;