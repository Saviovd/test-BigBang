import { styled } from "styled-components";

interface LoadingStyleProps {
    color: string;
    width: number
}

export const LoadingStyle = styled.div<LoadingStyleProps>`
    width: ${(props) => props.width ? props.width.toString()+'%' : '50%'};
    background-color: ${props => props.color ? props.color : 'rgb(255 255 255)'};
    height: 30px;
    margin: 10px 0;
    border-radius: 10px;
`;
