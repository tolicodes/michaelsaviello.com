import styled from "styled-components";

interface IActiveItem {
  active?: boolean;
  filled?: boolean;
}

export const SSlider = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const SSlide = styled.div<IActiveItem>`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  perspective: 100rem;
  overflow-x: hidden;

  opacity: ${(props) => (props.active ? "1" : "0")};
`;

export const SSlideImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const SSliderControlsDetails = styled.div`
  margin-left: 25px;
`;

export const SSliderControls = styled.div`
  position: relative;

  display: flex;

  position: absolute;
  bottom: 50px;
  left: 100px;

  height: 148px;
  width: 779px;
  padding: 20px 40px 40px;
  box-sizing: border-box;

  background-color: white;
  border: 1px solid black;

  h1,
  h3 {
    font-family: "Haettenschweiler", sans-serif;
  }

  h1 {
    max-width: 445px;
    font-size: 49px;
    line-height: 45px;
    text-transform: uppercase;

    border-right: 2px solid #d0d0d0;
    box-sizing: border-box;

    color: #000000;
  }

  h3 {
    font-size: 36px;
    line-height: 38px;
    text-transform: uppercase;

    color: #000000;
  }

  h5 {
    font-family: "Roboto", sans-serif;
    font-size: 17px;
    line-height: 26px;

    color: #000000;
  }
`;

export const SSliderProgressBar = styled.div`
  display: flex;

  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 17px;
  border-top: 1px solid black;
`;

export const SSliderProgressBarItem = styled.div<IActiveItem>`
  height: 17px;
  width: 33.33%;

  border-right: 1px solid black;

  :last-child {
    border: none;
  }

  > div {
    transition: ${(props) => (props.filled ? "width 1s ease" : "none")};
    width: ${(props) => (props.active || props.filled ? "100%" : "0")};
    height: inherit;

    background-color: black;
  }
`;
