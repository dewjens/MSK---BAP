import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Interface from './components/ui';
import Artselector from './components/art/Artselector';
import style from './assets/css/style.css';

/* eslint-disable */
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
          <div className={style.enterSection}>
            <h2 className={style.enterTitle}>Een optische revolutie</h2>
            <h3 className={style.enterTitle2}>Van Eyck</h3>
            <div className={style.enterDesc}>
              Welkom op het verhalen-platform van de Jan Van Eyck expositie.
              Hierop vind je een overzicht van alle kunstwerken met bijhorende
              verhalen zodat je er meer over teweten kan komen.
            </div>
            <button
              className={style.enterBtn}
              onClick={this.onButtonClick}
              type="button"
            >
              Ontdek de thema's
            </button>
          </div>
        ) : null}
        {this.state.showComponent ? <Artselector /> : null}
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
