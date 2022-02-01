import styled from "styled-components";

export const SHeader = styled.div`
    position: fixed;
    top: 0;
    z-index: 1;

    width: 100%;
    height: calc(3.75rem - 1px);
    display: flex;
    border-bottom: 1px solid #ffffff;

    align-items: center;

    ${({backgroundColor}: {backgroundColor: string}) => backgroundColor && `background-color: ${backgroundColor}`};
`;

export const SLogo = styled.img`
    height: 2rem;
`;