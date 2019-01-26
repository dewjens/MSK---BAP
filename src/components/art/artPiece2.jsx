import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';
import style from './art.css';
import ArtSelector from './artselector';
import Art2 from '../../assets/img/art2.jpg';
import Video from '../video';
/* eslint-disable */

class Artpiece2 extends Component {
  render() {
    return (
      <section className={style.artSection}>
        <Link to="/first/video">
          <span className={style.hotspot} />
        </Link>
        <div className={style.arspotTitle}>
          <h2>Artwork 2</h2>
          <h2 className={style.artMaker}>Jan Van Eyck</h2>
        </div>
        <img src={Art2} height="600" width="500" />
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
    );
  }
}

export default hot(module)(Artpiece2);
