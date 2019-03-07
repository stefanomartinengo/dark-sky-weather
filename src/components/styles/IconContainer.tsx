import styled, { css, keyframes } from 'styled-components';

const loadingKeyframes = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(54000deg);
    }
`

export const IconContainer = styled.img<{ isFetching: boolean }>`
    display: flex;
    height: 100px;
    width: 100px;
    animation-name: ${props => props.isFetching ? loadingKeyframes : ''};
    animation-duration: 90s;
    margin: auto;
`;

export const IconWrapper = styled.div`
    margin-bottom:25px;
`;

export const HomepageDiv = styled.div`
    font-size: 24px;
`;

export const HomepageSubDiv = styled.div`
    margin-top:10px;
    font-style: italic;
    font-size: 16px;
`;