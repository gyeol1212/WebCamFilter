import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import makeFilter from '../utils/makeFilter';

interface IProps {
  slideFilter: {
    grayscale: number;
    sepia: number;
    invert: number;
    hueRotate: number;
    blur: number;
    contrast: number;
  };
  setVideo: (videoEl: HTMLVideoElement | null) => void;
}

const Container = styled.div`
  height: 400px;
  margin: 1rem auto;
  text-align: center;
`;

const Video = styled.video`
  height: 100%;
  border: 2px solid lightgray;
`;

const VideoSection: React.FC<IProps> = ({ slideFilter, setVideo }) => {
  const videoEl = useRef<HTMLVideoElement>(null);

  const [initialSetting, setInitialSetting] = useState(false);

  useEffect(() => {
    if (!videoEl) {
      return;
    }

    setVideo(videoEl.current);

    const video = videoEl.current;

    if (!initialSetting) {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: true,
        })
        .then(stream => {
          if (video) {
            video.srcObject = stream;
            video.onloadedmetadata = e => {
              video.play();
            };
          }
        })
        .catch(err => {
          console.log(`ERROR : ${err}`);
        });
      setInitialSetting(true);
    }
    // filter
    const newFilter = makeFilter(slideFilter);
    if (video) {
      video.style.filter = newFilter;
    }
  }, [videoEl, slideFilter, initialSetting]);

  return (
    <Container>
      <Video ref={videoEl} />
    </Container>
  );
};

export default VideoSection;
