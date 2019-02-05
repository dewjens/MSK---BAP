import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Transition } from 'react-spring';
import style from './art.css';
import Left from '../../assets/img/back.svg';
import Right from '../../assets/img/right-arrow.svg';
import Thema1Selector from './thema1Selector';
import Thema2Selector from './thema2Selector';
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
  showSubtitles() {
    setTimeout(() => this.setState({ items: [<span className={style.subTitle}>De middeleeuwse stad, een belangrijk wederkend onderwerp in vele werken op de expositie.</span>] }), 3000)
    setTimeout(() => this.setState({ items: [<span className={style.subTitle}>Klassieke gebouwen, rumoerige marktjes en de vele handelaren. Een mysterieus raadsel.</span>] }), 8000)
    setTimeout(() => this.setState({ items: [<span className={style.subTitle}>Baan je een weg door de middeleeuwse straatjes en ontdek waarom de middeleeuwse stad zo belangrijk voor veel kunstenaars was.</span>] }), 13000)
    setTimeout(() => this.setState({ items: [''] }), 18000)
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
    this.showSubtitles();
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

  closeThema2() {
    this.setState({
      closeThema2: !this.state.closeThema2,
      toggleThema2: !this.state.toggleThema2,
      isHidden: this.state.isHidden,
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
                  onClick={this.toThema1.bind(this)}
                  className={`${style.theme} ${style.theme1}`}
                >
                  <div className={style.playBtnWrapper}>
                    <div className={style.playBtn}/>
                  </div>
                  <div className={style.ontdek}>
                    <div className={style.ontdekBg}><span className={style.ontdektext}> Ontdekken</span></div>
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
                  <div className={style.playBtn}/>
                </div>
                <div className={style.ontdek}>
                  <div className={style.ontdekBg}><span className={style.ontdektext}> Ontdekken</span></div>
                </div>
                  <div className={style.themeDescr}>
                    <h3 className={style.themeName}>Beeldhouwkunst</h3>
                    <h4 className={style.themeWorks}>2 werken</h4>
                  </div>
                </div>
                <div
                  className={`${style.theme} ${style.theme3}`}
                >
                <div className={style.playBtnWrapper}>
                  <div className={style.playBtn}/>
                </div>
                <div className={style.ontdek}>
                  <div className={style.ontdekBg}><span className={style.ontdektext}> Ontdekken</span></div>
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
          leave={{ opacity: 0 }}>
          {show =>
            show && (props =>
              <div style={props}>
                <span className={style.themaTitle}>Middeleeuwse stad</span>
                <span onClick={this.closeThema1.bind(this)} className={style.skipThema}>Bekijk de werken</span>
                <div className={style.subTitles}>
                <Transition
                          native
                          items={this.state.items}
                          from={{ opacity: 0, transform: 'scale(1)' }}
                          enter={[{ opacity: 1 }, { transform: 'scale(1.25)' }]}
                          leave={[
                            { transform: 'scale(0)', opacity: 0 },
                            { opacity: 0 },
                            { height: 0 },
                          ]}>
                          {item => props => (
                            <div
                              style={props}
                              className={style.subTitleWrapper}
                              children={item}
                            />
                          )}
                        </Transition>
                </div>
                <ThemaVideo url={'http://student.howest.be/jens.de.witte/20182019/videos/thema1.mp4'}/>
              </div>)
          }
        </Transition>
        <Transition
          items={!this.state.closeThema1}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {show =>
            show && (props =>
              <div style={props}>
                <Thema1Selector />
                <div className={style.spotLight}/>
              </div>)
          }
        </Transition>
        <Transition
          items={this.state.toggleThema2}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {show =>
            show && (props =>
              <div style={props}>
                <span className={style.themaTitle}>Beeldhouwkunst</span>
                <span onClick={this.closeThema2.bind(this)} className={style.skipThema}>Bekijk de werken</span>
                <ThemaVideo url={'http://student.howest.be/jens.de.witte/20182019/videos/thema2.mp4'}/>
              </div>)
          }
        </Transition>
        <Transition
          items={!this.state.closeThema2}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {show =>
            show && (props =>
              <div style={props}>
                <Thema2Selector />
                <div className={style.spotLight}/>
              </div>)
          }
        </Transition>
        }
      </div>
    );
  }
}

export default hot(module)(ArtSelector);
