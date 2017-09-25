import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './app/index';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main/>
      </MuiThemeProvider>
    );
  }
}

export default App;
