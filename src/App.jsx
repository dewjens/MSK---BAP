import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Interface from './components/ui';
import Video from './components/video';
import style from './assets/css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className={style.main}>
        <Interface
          title=<span className={style.expoInfo}>
          Van Eyck,
            <br /> <span className={style.light}>Een optische revolutie</span>
            <br /> <span className={style.red}>01.02.20 - 30.04.20</span>
          </span>/>
          <Video/>
      </main>
    );
  }
}

export default hot(module)(App);
