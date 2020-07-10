import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Home, About, Contact, Navbar } from './component';
import Footer from './component/Footer';

class App extends Component {
  /**
   * Lifecycle Method
   */

  constructor(props) {
    super(props);

    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentWillUnmount() {
    console.log('Component will unmount!');
  }

  render() {
    return (
      <div className='page-container'>
        <div className='content-wrap'>
          <Router>
            <Navbar />
            <Link to='/'></Link>
            <Link to='/about'></Link>

            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
