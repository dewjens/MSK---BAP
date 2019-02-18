import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import style from './art.css';
import ArtPiece3 from './artPiece3.jsx';
import ArtPiece4 from './artPiece4.jsx';
import Art5 from '../../assets/img/art5.jpg';
import Art6 from '../../assets/img/art6.jpg';
import Art7 from '../../assets/img/art7.jpg';
import Art8 from '../../assets/img/art8.jpg';
import Back from '../../assets/img/back.svg';
import Next from '../../assets/img/right-arrow.svg';
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
              <Link className={style.link} to="/third">
                <picture>
                  <img
                    className={`${style.artPiece} ${style.ap5}`}
                    src={Art5}
                    alt="art5"
                  />
                </picture>
                <h2 className={style.artTitle}>
                  Annunciatie Thyssen-Bornemisza
                </h2>
                <h2 className={style.artMaker}>Linkerpaneel</h2>
              </Link>
            </section>
            <section className={style.artWrapper}>
              <Link className={style.link} to="/fourth">
                <picture>
                  <img
                    className={`${style.artPiece} ${style.ap6}`}
                    src={Art8}
                    alt="art5"
                  />
                </picture>
                <h2 className={style.artTitle}>
                  Annunciatie Thyssen-Bornemisza
                </h2>
                <h2 className={style.artMaker}>Rechterpaneel</h2>
              </Link>
            </section>
            <section className={style.artWrapper}>
              <Link className={style.link} to="/">
                <picture>
                  <img
                    className={`${style.artPiece} ${style.ap7}`}
                    src={Art6}
                    alt="art2"
                  />
                </picture>
                <h2 className={style.artTitle}>Dresden, Tryptich</h2>
                <h2 className={style.artMaker}>Linker paneel</h2>
              </Link>
            </section>
            <section className={style.artWrapper}>
              <Link className={style.link} to="/">
                <picture>
                  <img
                    className={`${style.artPiece} ${style.ap8}`}
                    src={Art7}
                    alt="art2"
                  />
                </picture>
                <h2 className={style.artTitle}>Dresden, Tryptich</h2>
                <h2 className={style.artMaker}>rechter paneel</h2>
              </Link>
            </section>
          </Carousel>
          <section className="route-section">
            <Switch>
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
