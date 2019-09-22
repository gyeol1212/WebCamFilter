import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import makeFilter from '../utils/makeFilter';
import FilterSection from './FilterSection';
import PictureSection from './PictureSection';
import VideoSection from './VideoSection';

const Container = styled.div`
  /* border: 1px solid black; */
  width: 70%;
  margin: 1rem auto;
`;

const Capture = styled.div`
  border: 1px solid black;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  width: 10%;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
`;

const VideoContainer: React.SFC = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  const [video, setVideo] = useState<HTMLVideoElement | null>();

  const [pictures, setPictures] = useState<string[]>([]);
  const [slideFilter, setSlideFilter] = useState({
    grayscale: 0,
    sepia: 0,
    invert: 0,
    // deg
    hueRotate: 0,
    // px
    blur: 0,
    // 0~200%
    contrast: 100,
  });

  const inputChangeHandler = (event: any) => {
    if (event.target.name === 'slider') {
      const { id, value } = event.target;
      setSlideFilter({ ...slideFilter, [id]: value });
    }
  };

  const setVideoEl = (videoEl: HTMLVideoElement | null) => {
    setVideo(videoEl);
  };

  const takePicture = () => {
    if (canvasEl && canvasEl.current) {
      const canvas = canvasEl.current;
      const context = canvas.getContext('2d');
      if (video && context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        // 이미지에 필터 적용
        const newFilter = makeFilter(slideFilter);
        context.filter = newFilter;
        // 이미지 그리기
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        // 이미지 Url 따기
        const imgUrl = canvas.toDataURL('image/png');

        setPictures([...pictures, imgUrl]);
      }
    }
  };

  const resetFilter = () => {
    setSlideFilter({
      grayscale: 0,
      sepia: 0,
      invert: 0,
      // deg
      hueRotate: 0,
      // px
      blur: 0,
      // 0~200%
      contrast: 100,
    });
  };

  return (
    <Container>
      <VideoSection slideFilter={slideFilter} setVideo={setVideoEl} />
      <Capture onClick={takePicture}>캡쳐</Capture>
      <FilterSection
        inputChangeHandler={inputChangeHandler}
        slideFilter={slideFilter}
        resetFilter={resetFilter}
      />
      <PictureSection pictures={pictures} />
      <canvas ref={canvasEl} style={{ display: 'none' }} />
    </Container>
  );
};

export default VideoContainer;
