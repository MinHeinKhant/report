import React, { Component } from 'react';
import AppRouter from './appRouter/AppRouter';

// CSS
// import './styles/base/base.css';
import './styles/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
