import styled from "styled-components";

export const Nav = styled.div`
    background: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: .8s all ease;
    }
`;
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    /* padding: 0 24px; */
    max-width: 1200px;
`;
export const NavLogo = styled.a`
    /* // color: ${({theme}) => theme.white}; */
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;

    @media screen and (max-width: 640px){
        padding: 0 0px;
    }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: 600;
    /* font-weight: bold; */
    font-size: 20px;
`;
export const BarsIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({theme}) => theme.text_primary};
    }
`;
export const ContainerButtonGithub = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    // padding: 0 6px;
    @media screen and (max-width: 640px){
        display: none;
    }
`;
export const GithubButton = styled.a`
    background-color: transparent;
    color: ${({theme}) => theme.primary};
    border: 1.8px solid ${({theme}) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    height: 70%;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
    }
    @media screen and (max-width: 640px){
        font-size: 0.8rem;
    }
`;

export const MobileMenu = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    top: 100%; 
    right: 0;
    position: absolute;
    gap: 16px;
    width: 100%;
    padding: 12px 40px 24px 40px;
    flex-direction: column;
    background-color: ${({theme}) => theme.card_light + 99};
    transition: all .5s ease-in-out;
    border-radius: 0 0 20 20px;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: ${({ open }) => (open ? '1' : '-1')};
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);

    .btnMobile{
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
        padding: 10px 14px;

        &:hover{
            background-color: transparent;
            color: ${({theme}) => theme.white};
            border: 1.8px solid ${({theme}) => theme.primary};
        }
    }
`;
export const MobileLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all .2s ease-in-out;
    &:hover{
        color: ${({theme}) => theme.primary};
    }
`;

