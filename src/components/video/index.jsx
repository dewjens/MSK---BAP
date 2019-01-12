import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import style from '../ui/ui.css';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
    }
  }

  render() {
    return (
      <video
        className={style.videoCanvas}
        autoPlay
        loop
        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
        poster="http://sourceposter.jpg">
        <source src={this.state.videoURL} type='video/mp4' />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src="http://source.vtt"
          default
        />
      </video>
    );
  }
}

export default hot(module)(Video);
