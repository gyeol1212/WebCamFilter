import React from 'react';
import './App.css';

import Title from './components/Title';
import VideoContainer from './components/VideoContiner';

const App: React.FC = () => {
  return (
    <div className="App">
      <Title>WebCam Filter</Title>
      <VideoContainer />
    </div>
  );
};

export default App;
