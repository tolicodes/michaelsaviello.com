import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

import { Default as DefaultSlider } from "../Slider/Slider.stories";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
    logo: "https://cdn.shopify.com/s/files/1/0619/1104/0250/files/t54_1_1_200x.png?v=1642872038",
    backgroundColor: '#000000'
};

// @ts-ignore
export const WithSlider = () => <DefaultSlider {...DefaultSlider.args!}>
    {/* @ts-ignore */}
    <Default {...{
        ...Default.args,
        backgroundColor: 'transparent'
    }} />
</DefaultSlider>;