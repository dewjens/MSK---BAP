import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';
import style from './art.css';
import ArtSelector from './artselector';
import Art3 from '../../assets/img/art3.png';
import Video from '../video';
/* eslint-disable */

class Artpiece3 extends Component {
  render() {
    return (
      <section className={style.artSection}>
        <Link to="/first/video">
          <span className={style.hotspot} />
        </Link>
        <div className={style.arspotTitle}>
          <h2>Artwork 3</h2>
          <h2 className={style.artMaker}>Jan Van Eyck</h2>
        </div>
        <img src={Art3} height="600" width="500" />
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

export default hot(module)(Artpiece3);
