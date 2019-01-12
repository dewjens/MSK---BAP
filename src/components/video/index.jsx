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
      <video className={style.videoCanvas}  loop autoPlay>
        <source src={this.state.videoURL} type="video/mp4" />
       Your browser does not support the video tag.
      </video>
    );
  }
}

export default hot(module)(Video);
