import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Interface from './components/ui';
import Video from './components/video';
import style from './assets/css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <main className={style.main}>
        {!this.state.showComponent ? (
          <button
            className={style.enterBtn}
            onClick={this.onButtonClick}
            type="button"
          >
            Ontdek de verhalen
          </button>
        ) : null}
        {this.state.showComponent ? <Video/> : null}
        <Interface
          title=<span className={style.expoInfo}>
            Van Eyck,
            <br /> <span className={style.light}>Een optische revolutie</span>
            <br /> <span className={style.red}>01.02.20 - 30.04.20</span>
          </span>
        />
      </main>
    );
  }
}

export default hot(module)(App);
