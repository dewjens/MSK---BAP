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
class Artpiece2 extends Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: false, toggleTp1: true };
  }

  handleMouseToggle() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  closeVideo(value) {
    if (value === 1){
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
          config={{ duration: 100, easing: easings.easeElasticIn }}
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
                          <Video closeVideo={this.closeVideo.bind(this)} url={'http://student.howest.be/jens.de.witte/20182019/videos/thema121.mp4'}/>
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
          to={{opacity: 1 }}
          config={{ duration: 800, easing: easings.ease }}
        >
          {props => (
            <div style={props}>
              <Link to="../">
                <button className={style.closeBtn}>Sluit</button>
              </Link>
              <span className={style.click}>Klik op een hotspot om het verhaal te ontdekken</span>
              <div className={style.artworkSpots}>
                <div className={`${style.videoBox} ${style.vb2}`}>
                  <div className={style.artSpots}>
                    <Tooltip
                      html={(
                        <div className={style.spotDesc}>
                          <strong>
                            Joos Vijd staat hoog in de Sint-Baafskathedraal om
                            aan te tonen dat hij nauw betrokken was bij de
                            Sint-Janskerk (later Sint-Baafskathedraal genoemd).
                            <br />
                            <br />
                            Het geld dat hij vast heeft wordt doorgegeven aan
                            Hubert Van Eyck (de broer van Jan Van Eyck) die de
                            opdracht aannam. Hubert/Jan van Eyck staat lager in
                            de toren, op de vermoedelijke plaats vanwaar ze dit
                            uitzicht hebben geschilderd.
                          </strong>
                        </div>
                      )}
                      followCursor="true"
                      trigger="mouseenter"
                    >
                      <span
                        onClick={this.toggle1.bind(this)}
                        className={`${style.hotspot} ${style.hs2}`} />
                    </Tooltip>
                  </div>
                  <div className={style.videoWrapper}>
                    <video
                      className={style.artSpots}
                      autoPlay
                      loop
                      id="video-background"
                      muted
                      plays-inline>
                      <source
                        src="http://student.howest.be/jens.de.witte/20182019/videos/thema12.mp4"
                        type="video/mp4" />
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

export default hot(module)(Artpiece2);
