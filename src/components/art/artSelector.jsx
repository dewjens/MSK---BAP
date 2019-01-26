import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Transition } from 'react-spring';
import style from './art.css';
import Left from '../../assets/img/back.svg';
import Right from '../../assets/img/right-arrow.svg';
import Thema1Selector from './thema1Selector';
import Thema2Selector from './thema2Selector';
/* eslint-disable */

class ArtSelector extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: false,
      toggle: true,
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  toggleThema() {
    this.setState({
      toggle: !this.state.toggle,
      isHidden: !this.state.isHidden,
    });
  }

  scrollLeft() {
    console.log('clicked left');
    const artSection = document.getElementsByClassName(style.artSelector)[0];
    console.log(artSection);
    artSection.scrollLeft -= 200;
  }

  scrollRight() {
    console.log('clicked right');
    const artSection = document.getElementsByClassName(style.artSelector)[0];
    console.log(artSection);
    artSection.scrollLeft += 200;
  }

  render() {
    return (
      <div className={style.themeWrapper}>
        <div className={style.scrollBtns}>
          <img
            onMouseDown={this.scrollLeft}
            className={style.slideLeft}
            src={Left}
            width="40"
          />
          <img
            onMouseDown={this.scrollRight}
            className={style.slide}
            src={Right}
            width="45"
          />
        </div>

        <div
          className={style.themePicker}
          onClick={this.toggleHidden.bind(this)}
        >
          Kies een thema
        </div>
        <Transition
          items={!this.state.isHidden}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {isHidden =>
            isHidden &&
            (props => (
              <div style={props} className={style.themeSection}>
                <div className={style.themeHeader}>
                  <h2 className={style.themeTitle}>kies een thema</h2>
                  <h3 className={style.themeIntro}>
                    Geen zorgen, je kan dit later nog veranderen
                  </h3>
                </div>
                <div
                  onClick={this.toggleThema.bind(this)}
                  className={`${style.theme} ${style.theme1}`}
                >
                  <h3 className={style.themeName}>4 werken</h3>
                </div>
                <div
                  onClick={this.toggleThema.bind(this)}
                  className={`${style.theme} ${style.theme2}`}
                >
                  <h3 className={style.themeName}>3 werken</h3>
                </div>
                <div
                  onClick={this.toggleThema.bind(this)}
                  className={style.theme}
                >
                  <h3 className={style.themeName}>thema 3</h3>
                </div>
                <div
                  onClick={this.toggleThema.bind(this)}
                  className={style.theme}
                >
                  <h3 className={style.themeName}>thema 4</h3>
                </div>
              </div>
            ))
          }
        </Transition>
        <Transition
          items={this.state.toggle}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, position: 'absolute' }}
        >
          {toggle =>
            toggle
              ? props => (
                  <div style={props}>
                    <Thema1Selector />
                  </div>
                )
              : props => (
                  <div style={props}>
                    <Thema2Selector />
                  </div>
                )
          }
        </Transition>
      </div>
    );
  }
}

export default hot(module)(ArtSelector);
