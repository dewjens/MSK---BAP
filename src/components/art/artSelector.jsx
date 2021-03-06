import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Transition } from 'react-spring';
import style from './art.css';
import Thema1Selector from './thema1Selector';
import Thema2Selector from './thema2Selector';
import Backthema from '../../assets/img/backThema.png';
// import Thema2Selector from './thema2Selector';
import ThemaVideo from '../thema/thema1.jsx';
/* eslint-disable */
class ArtSelector extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: false,
      toggleThema1: false,
      toggleThema2: false,
      closeThema1: true,
      closeThema2: true,
      items: [],
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
      toggleThema1: false,
      toggleThema2: false,
      closeThema1: true,
      closeThema2: true,
    });
  }

  toThema1() {
    this.setState({
      toggleThema1: !this.state.toggleThema1,
      isHidden: !this.state.isHidden,
    });
  }

  toThema2() {
    this.setState({
      toggleThema2: !this.state.toggleThema2,
      isHidden: !this.state.isHidden,
    });
  }

  closeThema1() {
    this.setState({
      closeThema1: !this.state.closeThema1,
      toggleThema1: !this.state.toggleThema1,
      isHidden: this.state.isHidden,
    });
  }

  switchtoThema2() {
    this.setState({
      toggleThema1: false,
      toggleThema2: false,
      closeThema1: true,
      closeThema2: false,
    });
  }

  switchtoThema1() {
    this.setState({
      toggleThema1: false,
      toggleThema2: false,
      closeThema1: false,
      closeThema2: true,
    });
  }

  closeThema2() {
    this.setState({
      closeThema2: !this.state.closeThema2,
      toggleThema2: !this.state.toggleThema2,
      isHidden: this.state.isHidden,
    });
  }

  render() {
    return (
      <div className={style.themeWrapper}>
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
                  onClick={this.toThema1.bind(this)}
                  className={`${style.theme} ${style.theme1}`}
                >
                  <div className={style.playBtnWrapper}>
                    <div className={style.playBtn} />
                  </div>
                  <div className={style.ontdek}>
                    <div className={style.ontdekBg}>
                      <span className={style.ontdektext}> Ontdekken</span>
                    </div>
                  </div>
                  <div className={style.themeDescr}>
                    <h3 className={style.themeName}>Middeleeuwse stad</h3>
                    <h4 className={style.themeWorks}>2 werken</h4>
                  </div>
                </div>
                <div
                  onClick={this.toThema2.bind(this)}
                  className={`${style.theme} ${style.theme2}`}
                >
                  <div className={style.playBtnWrapper}>
                    <div className={style.playBtn} />
                  </div>
                  <div className={style.ontdek}>
                    <div className={style.ontdekBg}>
                      <span className={style.ontdektext}> Ontdekken</span>
                    </div>
                  </div>
                  <div className={style.themeDescr}>
                    <h3 className={style.themeName}>Beeldhouwkunst</h3>
                    <h4 className={style.themeWorks}>2 werken</h4>
                  </div>
                </div>
                <div className={`${style.theme} ${style.theme3}`}>
                  <div className={style.playBtnWrapper}>
                    <div className={style.playBtn} />
                  </div>
                  <div className={style.ontdek}>
                    <div className={style.ontdekBg}>
                      <span className={style.ontdektext}> Ontdekken</span>
                    </div>
                  </div>
                  <div className={style.themeDescr}>
                    <h3 className={style.themeName}>Middeleeuws landschap</h3>
                    <h4 className={style.themeWorks}>2 werken</h4>
                  </div>
                </div>
              </div>
            ))
          }
        </Transition>
        <Transition
          items={this.state.toggleThema1}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <div style={props}>
                <span className={style.themaTitle}>Middeleeuwse stad</span>
                <span
                  onClick={this.closeThema1.bind(this)}
                  className={style.skipThema}
                >
                  Bekijk de werken
                </span>
                <ThemaVideo thema="1" url="http://student.howest.be/jens.de.witte/20182019/videos/thema1.mp4" />
              </div>
            ))
          }
        </Transition>
        <Transition
          config={{ duration: 1 }}
          items={!this.state.closeThema1}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <div style={props}>
                <section className={style.alterThemepicker}>
                  <div
                    className={style.themePicker}
                    onClick={this.toggleHidden.bind(this)}
                  >
                    <img src={Backthema} />
                    <span className={style.themeBack}>Terug</span>
                  </div>
                  <ul className={style.themeAlter}>
                    <li
                      onClick={this.switchtoThema1.bind(this)}
                      className={`${style.themeAlterItem} ${style.active}`}
                    >
                      Middeleeuwse stad
                    </li>
                    <li
                      onClick={this.switchtoThema2.bind(this)}
                      className={style.themeAlterItem}
                    >
                      Beeldhouwkunst
                    </li>
                    <li className={style.themeAlterItem}>
                      Middeleeuws Landschap
                    </li>
                  </ul>
                </section>
                <Thema1Selector />
                <div className={style.spotLight} />
              </div>
            ))
          }
        </Transition>
        <Transition
          items={this.state.toggleThema2}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <div style={props}>
                <span className={style.themaTitle}>Beeldhouwkunst</span>
                <span
                  onClick={this.closeThema2.bind(this)}
                  className={style.skipThema}
                >
                  Bekijk de werken
                </span>
                <ThemaVideo thema="2" url="http://student.howest.be/jens.de.witte/20182019/videos/thema2.mp4" />
              </div>
            ))
          }
        </Transition>
        <Transition
          config={{ duration: 1 }}
          items={!this.state.closeThema2}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <div style={props}>
                <section className={style.alterThemepicker}>
                  <div
                    className={style.themePicker}
                    onClick={this.toggleHidden.bind(this)}
                  >
                    <img src={Backthema} />
                    <span className={style.themeBack}>Terug</span>
                  </div>
                  <ul className={style.themeAlter}>
                    <li
                      onClick={this.switchtoThema1.bind(this)}
                      className={style.themeAlterItem}
                    >
                      Middeleeuwse stad
                    </li>
                    <li
                      onClick={this.switchtoThema2.bind(this)}
                      className={`${style.themeAlterItem} ${style.active}`}
                    >
                      Beeldhouwkunst
                    </li>
                    <li className={style.themeAlterItem}>
                      Middeleeuws Landschap
                    </li>
                  </ul>
                </section>
                <Thema2Selector />
                <div className={style.spotLight} />
              </div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default hot(module)(ArtSelector);
