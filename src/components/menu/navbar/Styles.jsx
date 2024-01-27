import styled from "styled-components";

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease-out;
    &:hover{
        color: ${({theme}) => theme.primary};
    }
`;
