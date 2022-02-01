import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Slider } from "./Slider";

const SLIDES_MOCK = [
  {
    title: "Slide 1",
    subtitle: "Foxy Image",
    image:
      "https://images.unsplash.com/photo-1559526971-55f629b0b760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "Slide 2",
    subtitle: "cuty awl",
    image:
      "https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
  },
  {
    title: "Slide 3",
    subtitle: "nice cat",
    image:
      "https://images.unsplash.com/photo-1557408938-0f220f49bca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  },
];

export default {
  title: "Test/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});

Default.args = {
  slides: SLIDES_MOCK,
};
