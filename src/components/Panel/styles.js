import { styled } from "styled-components";

export const PanelStyle = styled.div`
display: flex;
flex-wrap: wrap;
padding: 0 4rem;
grid-area: panel;
gap: 0px 15px;
min-height: 480px;
justify-content: center;

.nav {
    display: flex;
    align-items: center;
    padding-left: 15px;
    height: 50px;
    width: 95%;
    border-radius: 10px;
    background-color: rgb(217, 217, 217);
    gap: 15px;
}

@media screen {
    @media (max-width: 1260px) {
        padding: 0 1rem;
    }
}
`