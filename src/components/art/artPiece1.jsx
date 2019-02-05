import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';
import { Spring, Transition } from 'react-spring';
import * as easings from 'd3-ease';
import style from './art.css';
import ArtSelector from './artselector';
import Art1 from '../../assets/img/art1.jpg';
import Video from '../video';
/* eslint-disable */

class Artpiece1 extends Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: false,
      toggleTp1: true,
    };
  }

  handleMouseToggle() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  toggle1() {
    this.setState({
      isHidden: !this.state.isHidden,
      toggleTp1: !this.state.toggleTp1,
    });
  }
  render() {
    const tooltipStyle = {
      visibility: this.state.isHidden ? 'visible' : 'hidden',
    };
    return (
      <Spring
        delay={100}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 500, easing: easings.easePolyIn }}
      >
        {props => (
          <div style={props}>
            <section className={style.artSection}>
              <Spring
                delay={500}
                from={{ height: 0, width: 0, opacity: 0 }}
                to={{ height: 6, width: 6, opacity: 1 }}
                config={{ duration: 100, easing: easings.easeElasticIn }}
              >
                {props => (
                  <div style={props}>

                    <Transition
                      items={this.state.toggleTp1}
                      from={{ opacity: 0 }}
                      enter={{ opacity: 1}}
                      leave={{ opacity: 0}}
                    >
                      {toggleTp1 =>
                        toggleTp1
                          ? props => (
                              <div style={props}>
                              </div>
                            )
                          : props => (
                            <div className={style.detailSection} style={props}>
                              <h3 className={style.videoTitle}>
                                Het verhaal over de middeleeuwen
                              </h3>
                              <div className={style.videoTooltip}>
                                <Video />
                              </div>
                              <div className={style.descVideo}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum."
                              </div>
                              <h4 className={style.otherTitle}>Andere raakpunten</h4>
                              <div className={style.otherTouchpoints}>
                                <div className={style.otherTp} />
                                <div className={style.otherTp} />
                              </div>
                            </div>
                            )
                      }
                    </Transition>
                  </div>
                )}
              </Spring>
              <div className={style.arspotTitle}>
                <h2>Artwork 1</h2>
                <h2 className={style.artMaker}>Jan Van Eyck</h2>
              </div>
              <Spring
                from={{ marginTop: 2000 }}
                to={{ marginTop: 0 }}
                config={{ duration: 600, easing: easings.easeCubicOut }}
              >
                {props => (
                  <div className={style.artSpotsWrapper} style={props}>
                  <span
                    onClick={this.toggle1.bind(this)}
                    className={`${style.hotspot} ${style.hs1}`}
                  />
                    <video className={style.artSpots} autoPlay loop id="video-background" muted plays-inline>
                      <source src="http://student.howest.be/jens.de.witte/20182019/videos/thema11.mp4" type="video/mp4" />
                    </video>

                  </div>
                )}
              </Spring>
              <Link to="../">
                <button className={style.closeBtn}>Sluit</button>
              </Link>
              <section className="art-section">
                <Switch>
                  <Route path="../" component={ArtSelector} />
                  <Route path="/first/video" component={Video} />
                </Switch>
              </section>
            </section>
          </div>
        )}
      </Spring>
    );
  }
}

export default hot(module)(Artpiece1);
