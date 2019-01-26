import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';
import { Spring } from 'react-spring';
import * as easings from 'd3-ease';
import style from './art.css';
import ArtPiece1 from './artPiece1.jsx';
import ArtPiece2 from './artPiece2.jsx';
import ArtPiece3 from './artPiece3.jsx';
import ArtPiece4 from './artPiece4.jsx';
/* eslint-disable */

class Thema1Selector extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
  }
  toggleHidden() {
    this.setState({
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
        <div className={style.artSelector}>
          <Spring
            delay={100}
            from={{ marginBottom: 300, opacity: 0 }}
            to={{ marginBottom: 0, opacity: 1 }}
            config={{ duration: 600, easing: easings.easePolyIn }}
          >
            {props => (
              <div style={props}>
                <Link className={style.link} to="/first">
                  <section className={style.artWrapper}>
                    <h2 className={style.artTitle}>Artwork 1</h2>
                    <h3 className={style.artMaker}>Jan Van Eyck</h3>
                    <div className={`${style.artPiece} ${style.art1}`}>
                      <span className={style.totalStories}>x verhalen</span>
                    </div>
                  </section>
                </Link>
              </div>
            )}
          </Spring>
          <Spring
            delay={250}
            from={{ marginBottom: 300, opacity: 0 }}
            to={{ marginBottom: 0, opacity: 1 }}
            config={{ duration: 600, easing: easings.easePolyIn }}
          >
            {props => (
              <div style={props}>
                <Link className={style.link} to="/second">
                  <section className={style.artWrapper}>
                    <h2 className={style.artTitle}>Artwork 2</h2>
                    <h2 className={style.artMaker}>Jan Van Eyck</h2>
                    <div className={`${style.artPiece} ${style.art2}`}>
                      <span className={style.totalStories}>x verhalen</span>
                    </div>
                  </section>
                </Link>
              </div>
            )}
          </Spring>
          <Spring
            delay={400}
            from={{ marginBottom: 300, opacity: 0 }}
            to={{ marginBottom: 0, opacity: 1 }}
            config={{ duration: 600, easing: easings.easePolyIn }}
          >
            {props => (
              <div style={props}>
                <Link className={style.link} to="/third">
                  <section className={style.artWrapper}>
                    <h2 className={style.artTitle}>Artwork 3</h2>
                    <h2 className={style.artMaker}>Jan Van Eyck</h2>
                    <div className={`${style.artPiece} ${style.art3}`}>
                      <span className={style.totalStories}>x verhalen</span>
                    </div>
                  </section>
                </Link>
              </div>
            )}
          </Spring>
          <Spring
            delay={550}
            from={{ marginBottom: 300, opacity: 0 }}
            to={{ marginBottom: 0, opacity: 1 }}
            config={{ duration: 600, easing: easings.easePolyIn }}
          >
            {props => (
              <div style={props}>
                <Link className={style.link} to="/fourth">
                  <section className={style.artWrapper}>
                    <h2 className={style.artTitle}>Artwork 4</h2>
                    <h2 className={style.artMaker}>Jan Van Eyck</h2>
                    <div className={`${style.artPiece} ${style.art4}`}>
                      <span className={style.totalStories}>x verhalen</span>
                    </div>
                  </section>
                </Link>
              </div>
            )}
          </Spring>
          <section className="route-section">
            <Switch>
              <Route path="/first" component={ArtPiece1} />
              <Route path="/second" component={ArtPiece2} />
              <Route path="/third" component={ArtPiece3} />
              <Route path="/fourth" component={ArtPiece4} />
            </Switch>
          </section>
        </div>
      </div>
    );
  }
}

export default hot(module)(Thema1Selector);
