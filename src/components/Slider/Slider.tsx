import * as React from "react";

import {
  SSdlierProgressBar,
  SSdlierProgressBarItem,
  SSlide,
  SSlideImage,
  SSlider,
  SSliderControls,
  SSliderControlsDetails,
} from "./styles";

const TIMER_DELAY = 2500;

type Slide = {
  title: string;
  subtitle: string;
  image: string;
};

interface ISlider {
  slides: Slide[];
}

export const Slider: React.FC<ISlider> = ({ slides }) => {
  const [cur, setCur] = React.useState(0);

  setTimeout(() => {
    nextMoving();
  }, TIMER_DELAY);

  const nextMoving = () => {
    if (cur >= slides.length - 1) {
      setCur(0);
    } else {
      setCur(cur + 1);
    }
  };
  const prevMoving = () => {
    if (cur <= 0) {
      setCur(slides.length - 1);
    } else {
      setCur(cur - 1);
    }
  };

  return (
    <SSlider>
      {!slides || slides.length === 0 ? null : (
        <>
          {slides.map((slide, idx) => (
            <SSlide active={idx === cur} key={idx}>
              <SSlideImage src={slide.image} />
            </SSlide>
          ))}
        </>
      )}
      <SSliderControls>
        <h1>Lorem ipsum dolor sit amet amet</h1>
        <SSliderControlsDetails>
          <h3>project</h3>
          <h5>2019</h5>
        </SSliderControlsDetails>
        <SSdlierProgressBar>
          {slides.map((slide, idx) => (
            <SSdlierProgressBarItem
              key={slide.title}
              active={idx === cur}
              filled={idx <= cur}
            >
              <div />
            </SSdlierProgressBarItem>
          ))}
        </SSdlierProgressBar>
      </SSliderControls>
    </SSlider>
  );
};
