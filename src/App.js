import { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import FooterPage from './components/partials/FooterPage';
import HeaderPage from './components/partials/HeaderPage';

class App extends Component {
  render(){
    return(
      <Fragment>
        <HeaderPage/>
          <BrowserRouter>
            <Route path={'/'} exact strict component={HomePage} />
          </BrowserRouter>
        <FooterPage/>
      </Fragment>
    );
  }
}

export default App;
