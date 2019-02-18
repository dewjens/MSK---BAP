import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import style from './art.css';
import ArtPiece1 from './artPiece1.jsx';
import ArtPiece2 from './artPiece2.jsx';
import ArtPiece3 from './artPiece3.jsx';
import ArtPiece4 from './artPiece4.jsx';
import Art1 from '../../assets/img/art1.jpg';
import Art2 from '../../assets/img/art2.png';
import Art3 from '../../assets/img/art3.jpg';
import Art4 from '../../assets/img/art4.jpg';
import Back from '../../assets/img/back.svg';
import Next from '../../assets/img/right-arrow.svg';
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

  render() {
    return (
      <div className={style.themeWrapper}>
        <div className={style.artSelector}>
          <Carousel
            renderBottomCenterControls={false}
            focusOnSelect={true}
            slidesToShow={2}
            wrapAround={false}
            slidesToScroll={1}
            slideIndex={0}
            cellAlign="center"
            cellSpacing={200}
            dragging={true}
            renderCenterLeftControls={({ previousSlide }) => (
              <button className={style.moveBtn} onClick={previousSlide}>
                <img className={style.moveArrow} src={Back} />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button className={style.moveBtn} onClick={nextSlide}>
                <img className={style.moveArrow} src={Next} />
              </button>
            )}
          >
            <section className={style.artWrapper}>
              <Link className={style.link} to="/first">
                <picture>
                  <img
                    className={`${style.artPiece} ${style.ap1}`}
                    src={Art1}
                    alt="art1"
                  />
                </picture>
                <h2 className={style.artTitle}>De Maagd van kanselier Rolin</h2>
                <h3 className={style.artMaker}>Église Notre-Dame du Châtel d'Autun</h3>
              </Link>
            </section>
            <section className={style.artWrapper}>
              <Link className={style.link} to="/second">
                <picture>
                  <img
                    className={`${style.artPiece} ${style.ap2}`}
                    src={Art2}
                    alt="art2"
                  />
                </picture>
                <h2 className={style.artTitle}>
                  Lam Gods 14. Interior with city view
                </h2>
                <h2 className={style.artMaker}>Buitenpaneel</h2>
              </Link>
            </section>
            <section className={style.artWrapper}>
              <Link className={style.link} to="/">
                <picture>
                  <img
                    className={`${style.artPiece} ${style.ap3}`}
                    src={Art3}
                    alt="art3 "
                  />
                </picture>
                <h2 className={style.artTitle}>Antwerpen, Sint Barbara</h2>
                <h2 className={style.artMaker}>Jan Van Eyck</h2>
              </Link>
            </section>
            <section className={style.artWrapper}>
              <Link className={style.link} to="/">
                <picture>
                  <img
                    className={`${style.artPiece} ${style.ap4}`}
                    src={Art4}
                    alt="art4"
                  />
                </picture>
                <h2 className={style.artTitle}>Dresden, Tryptich</h2>
                <h2 className={style.artMaker}>Jan Van Eyck</h2>
              </Link>
            </section>
          </Carousel>
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
