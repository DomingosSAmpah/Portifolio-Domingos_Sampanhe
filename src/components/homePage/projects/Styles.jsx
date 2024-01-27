import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(
        343.07deg,
        rgba(132, 59, 206, .06) 5.71%,
        rgba(132, 59, 206, 0) 64.83%,
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;
export const Wrapper = styled.div`
    max-width: 1350px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
    padding: 60px 0px;

`;

export const ToogleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`;
export const ToogleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;

    ${({ active, theme }) => active && `background-color:  ${theme.primary + 20};`
    }
    &:hover{
        background-color:  ${({ theme }) => theme.primary + 8};
    }

    @media screen and (max-width: 768px){
         padding: 6px 8px;
         border-radius: 4px;
    }
`;

export const Divider = styled.div`
    width: 1.5px;
    background-color:  ${({ theme }) => theme.primary};
    /* margin: 0 12px; */
`;
export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
`;
