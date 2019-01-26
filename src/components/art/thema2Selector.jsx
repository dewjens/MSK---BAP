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
import Art2 from '../../assets/img/art2.jpg';
import Art3 from '../../assets/img/art3.png';
import Art4 from '../../assets/img/art4.png';
/* eslint-disable */

class Thema2Selector extends Component {
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
                    <div className={style.artPiece}>
                      <img src={Art2} height="300" width="400" />
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
                    <div className={style.artPiece}>
                      <img src={Art3} height="360" width="300" />
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
                    <div className={style.artPiece}>
                      <img src={Art4} height="380" width="300" />
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

export default hot(module)(Thema2Selector);
