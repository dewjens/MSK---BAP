import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import IdleTimer from 'react-idle-timer';
import style from '../ui/ui.css';
/* eslint-disable */
class Video extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleRangeUpdate = this.handleRangeUpdate.bind(this);
    this.scrub = this.scrub.bind(this);
    this.startMouseDown = this.startMouseDown.bind(this);
    this.endMouseDown = this.endMouseDown.bind(this);
    this.skip = this.skip.bind(this);
    this.state = {
      videoURL:
        'http://student.howest.be/jens.de.witte/20182019/videos/thema1.mp4',
      progress: '0%',
      playbackRate: 1,
      volume: 1,
      isMouseDown: false,
      opacity: 1,
      height: '0rem',
      fullscreen: true,
    };
    this.idleTimer = null;
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
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

  _onActive() {
    this.state.opacity = 1;
  }

  _onIdle() {
    this.state.opacity = 0;
  }

  togglePlay() {
    const { video } = this.state;
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    this.state.height = '0rem';
    this.state.opacity = 1;
  }

  handleProgress() {
    const { video } = this.state;
    const percent = (video.currentTime / video.duration) * 100;
    this.setState({
      progress: `${percent}%`,
    });
    if (this.state.progress < '100%') {
      this.props.closeVideo(0);
    }
    if (this.state.progress == '100%') {
      this.props.closeVideo(1);
    }
  }

  handleRangeUpdate(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    this.refs.video[name] = value;
  }

  scrub(e) {
    const scrubTime =
      (e.nativeEvent.offsetX / this.refs.video.clientWidth) *
      this.refs.video.duration;
    if (!isNaN(scrubTime)) {
      this.refs.video.currentTime = scrubTime;
    }
  }

  startMouseDown() {
    this.setState({
      isMouseDown: true,
    });
  }

  endMouseDown() {
    this.setState({
      isMouseDown: false,
    });
  }

  skip(e) {
    const skipValue = e.target.attributes[0].value;
    if (!isNaN(skipValue)) {
      this.refs.video.currentTime += Number(skipValue);
    }
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
    const { video, progress, playbackRate, volume } = this.state;
    return (
      <div
        className={`${style.player} ${
          this.state.fullscreen ? `${style.fullscreenPlayer}` : null
        }`}
      >
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

        <div className={style.player__controls}>
          <div
            className={style.progress}
            onMouseDown={this.startMouseDown}
            onMouseUp={this.endMouseDown}
            style={{ opacity: this.state.opacity }}
            onMouseLeave={this.endMouseDown}
            onMouseMove={e => this.state.isMouseDown && this.scrub(e)}
            onClick={this.scrub}
          >
            <div
              className={style.progress__filled}
              style={{ flexBasis: progress }}
            />
          </div>
          <input
            type="range"
            name="volume"
            className={style.player__slider}
            style={{ opacity: this.state.opacity }}
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={this.handleRangeUpdate}
          />
        </div>
        <div className={style.shadow} style={{ opacity: this.state.opacity }} />
        <video
          className={style.videoCanvas}
          ref="video"
          autoPlay
          playsInline
          onClick={this.togglePlay}
        >
          <source src={this.props.url} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default hot(module)(Video);
