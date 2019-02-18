import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';
import { Spring, Transition } from 'react-spring';
import * as easings from 'd3-ease';
import { Tooltip } from 'react-tippy';
import style from './art.css';
import ArtSelector from './artselector';
import Video from '../video';
/* eslint-disable */
class Artpiece3 extends Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: false, toggleTp1: true };
  }

  handleMouseToggle() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

    closeStory(){
      this.setState({
        toggleTp1: !this.state.toggleTp1,
      });
    }

  closeVideo(value) {
    if (value === 1) {
      this.setState({
        toggleTp1: !this.state.toggleTp1,
      });
    }

    if (value === 0) {
      this.setState({
        toggleTp1: this.state.toggleTp1,
      });
    }
  }

  toggle1() {
    this.setState({
      isHidden: !this.state.isHidden,
      toggleTp1: !this.state.toggleTp1,
    });
  }

  render() {
    return (
      <section className={style.artSection}>
        <Spring
          delay={500}
          from={{ height: 0, width: 0, opacity: 0 }}
          to={{ height: 6, width: 6, opacity: 1 }}
          config={{ duration: 100, easing: easings.easeCubic }}
        >
          {props => (
            <div style={props}>
              <Transition
                items={this.state.toggleTp1}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
              >
                {toggleTp1 =>
                  toggleTp1
                    ? props => <div style={props} />
                    : props => (
                        <div className={style.detailSection} style={props}>
                          <div className={style.videoTooltip}>
                          <span
                            onClick={this.closeStory.bind(this)}
                            className={style.skipThema}
                          >
                            Sluit
                          </span>
                            <Video
                              closeVideo={this.closeVideo.bind(this)}
                              url={
                                'http://student.howest.be/jens.de.witte/20182019/videos/thema211.mp4'
                              }
                            />
                          </div>
                        </div>
                      )
                }
              </Transition>
            </div>
          )}
        </Spring>
        <Spring
          delay={500}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 800, easing: easings.easeCubic }}
        >
          {props => (
            <div style={props}>
              <Link to="../">
                <button className={style.closeBtn}>Sluit</button>
              </Link>
              <span className={style.click}>
                Klik op een hotspot om het verhaal te ontdekken
              </span>
              <div className={style.artworkSpots}>
                <div className={`${style.videoBox} ${style.vb3}`}>
                  <div className={style.artSpots}>
                    <Tooltip
                      html={
                        <div className={style.spotDesc}>
                          <strong>
                            Gabriël komt aan en begroet Maria met "Hail, full of
                            grace! Blessed are you among women." (Ave gratia
                            plena Dominus tecum benedicta tu in mulieribus)
                          </strong>
                        </div>
                      }
                      followCursor="true"
                      trigger="mouseenter"
                    >
                      <span
                        onClick={this.toggle1.bind(this)}
                        className={`${style.hotspot} ${style.hs3}`}
                      />
                    </Tooltip>
                  </div>
                  <div className={style.videoWrapper}>
                    <video
                      className={`${style.artSpots} ${style.as3}`}
                      autoPlay
                      loop
                      id="video-background"
                      muted
                      plays-inline
                    >
                      <source
                        src="http://student.howest.be/jens.de.witte/20182019/videos/thema21.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Spring>
        <div className={style.spotLight} />
        <section className="art-section">
          <Switch>
            <Route path="../" component={ArtSelector} />
            <Route path="/first/video" component={Video} />
          </Switch>
        </section>
      </section>
    );
  }
}

export default hot(module)(Artpiece3);
