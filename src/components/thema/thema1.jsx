import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import IdleTimer from 'react-idle-timer';
import style from '../ui/ui.css';
/* eslint-disable */
class ThemaVideo extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.state = {
      opacity: 1,
      height: '0rem',
    };
    this.idleTimer = null;
    this.onActive = this.onActive.bind(this);
    this.onIdle = this.onIdle.bind(this);
    this.handleOnHover = this.handleOnHover.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        video: this.refs.video,
      },
      () => {
        ['pause', 'play'].forEach(event => {
          this.state.video.addEventListener(event, () => {
            this.forceUpdate();
          });
        });
        this.state.video.addEventListener('timeupdate', this.handleProgress);
      },
    );
  }

  onActive() {
    this.state.opacity = 1;
  }

  onIdle() {
    this.state.opacity = 0;
  }

  togglePlay() {
    const { video } = this.state;
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    this.state.height = '0rem';
    this.state.opacity = 1;
  }

  handleOnHover() {
    this.state.height = '20.3rem';
    this.state.opacity = 0;
  }

  handleClose() {
    this.state.height = '0rem';
    this.state.opacity = 1;
  }

  render() {
    const { video } = this.state;
    return (
      <div className={style.themaPlayer}>
        <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={2000}
        />
        <div className={style.shadow} style={{ opacity: this.state.opacity }} />
        <video
          className={style.themaCanvas}
          ref="video"
          loop
          autoPlay
          onClick={this.togglePlay}
        >
          <source src={this.props.url} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default hot(module)(ThemaVideo);
