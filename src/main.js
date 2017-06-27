/* global document */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu';
import ReduxCounter from './components/counter';
import VerifyMessage from './components/verifyMessage';
import Metronome from './utils/metronome';
import Dialogs from './components/dialogs';
import './main.less';
import Static from './components/static';

class App extends React.Component {
  constructor() {
    super();
    this.ReduxCounter = ReduxCounter;
    this.VerifyMessage = VerifyMessage;
    this.state = {
      activeDialog: null,
    };
  }

  setActiveDialog(name) {
    this.setState(Object.assign({}, this.state, { activeDialog: name }));
  }

  componentDidMount() {
    // start dispatching sync ticks
    this.metronome = new Metronome();
    this.metronome.init();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <IconMenu className='main-menu-icon-button'
                icon='more_vert' position='topLeft' menuRipple>
              <MenuItem
                className='verify-message'
                onClick={this.setActiveDialog.bind(this, 'verify-message')}
                caption='Verify Message' />
            </IconMenu>
            <nav>
            <Dialogs active={this.state.activeDialog} />
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/counter">counter</Link>
                </li>
                <li>
                  <Link to="/static">Static</Link>
                </li>
              </ul>
            </nav>
            <Route exact path="/" render={() => <p>Home</p>} />
            <Route path="/static" component={Static} />
            <Route path="/counter" component={this.ReduxCounter} />
          </div>
        </Router>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
