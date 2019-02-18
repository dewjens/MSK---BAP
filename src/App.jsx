import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Preloader, Placeholder } from 'react-preloading-screen';
import Interface from './components/ui';
import Artselector from './components/art/Artselector';
import Preload from './assets/img/preload.svg';
import style from './assets/css/style.css';
/* eslint-disable */
const divStyle = {
  color: '#ffeace',
  backgroundColor: '#221c15',
  fontFamily: 'none',
  backgroundImage: `url(${Preload})`,
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  fontSize: '1.3rem',
};

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
      <Preloader
        style={divStyle}
        fadeDuration={3000}
        >
        <Placeholder>
        </Placeholder>
      <main className={style.main}>
        {!this.state.showComponent ? (
          <div className={style.enterSection}>
            <h2 className={style.enterTitle}>Een optische revolutie</h2>
            <h3 className={style.enterTitle2}>Van Eyck</h3>
            <div className={style.enterDesc}>
              Bekijk De werken van de 'een optische revolutie' tentoonstelling in detail.
              Ontdek de achtergrondverhalen en verreik je kennis over het Middeleeuwse leven.
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
     </Preloader>

    );
  }
}

export default hot(module)(App);
