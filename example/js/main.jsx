import React from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';

ReactDOM.render(
  <ReactAudioPlayer
    src="https://firebasestorage.googleapis.com/v0/b/qraft-app.appspot.com/o/videoplayback.m4a?alt=media&token=1672e0e6-776b-48dc-9fbb-5ec9c999e0a1"
    controls
  />,
  document.querySelector('.app')
);
