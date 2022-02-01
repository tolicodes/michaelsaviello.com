import * as React from "react";

import {
    SHeader,
    SLogo,
} from "./styles";


interface IHeader {
    logo: string;
    backgroundColor: string;
}

export const Header: React.FC<IHeader> = ({ logo, backgroundColor }) => {
  return (
    <SHeader backgroundColor={backgroundColor}>

        {
            <SLogo src={logo} alt="logo" />
        }
    </SHeader>
  );
};
