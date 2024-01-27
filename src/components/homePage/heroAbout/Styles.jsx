import styled from "styled-components";

export const HeroContainer = styled.div`
    background: ${({theme}) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 60px 0px;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

    @media screen and (max-width: 960px){
        padding: 66px 16px;
    }
    @media screen and (max-width: 640px){
        padding: 32px 16px;
    }
`; 
export const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    overflow: hidden;
    width: 85%;
    height: 100%;
    padding: 0 30px;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);

    @media screen and (max-width: 960px){
        padding: 0 0px;
        justify-content: center;
    }
`;

export const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`;

export const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;

    @media screen and (max-width: 960px){
        order: 2;
        margin-bottom: 32px;
        flex-direction: column;
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 640px){
        order: 2;
        margin-bottom: 32px;
        flex-direction: column;
        display: flex;
        align-items: center;
    }
`;

export const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;

    @media screen and (max-width: 960px){
        order: 1;
        margin-bottom: 80px;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 640px){
        order: 1;
        margin-bottom: 30px;
    }
`;

export const Title = styled.div`
    font-size: 48px;
    font-weight: 500;
    color: ${({theme}) => theme.text_primary};
    line-height: 40px;

    span{
        font-size: 18px;
        font-weight: 300;
        color: ${({theme}) => theme.primary};
    }

    @media screen and (max-width: 960px){
        text-align: center;
    }
    @media screen and (max-width: 640px){
        font-size: 38px;
        line-height: 46px;
        margin-bottom: 8px;
    }
`;

export const TextLoop = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: ${({theme}) => theme.text_primary};
    line-height: 66px;
    gap: 12px;
    display: flex;

    @media screen and (max-width: 960px){
        text-align: center;
    }
    @media screen and (max-width: 640px){
        font-size: 20px;
        line-height: 46px;
        margin-bottom: 16px;
    }
`;

export const Span = styled.span`
    color: ${({theme}) => theme.primary};
    cursor: pointer;
`;
export const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    align-items: center;
`;
export const Tag = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 4px 10px;
    border-radius: 10px;
`;
export const SubTitle = styled.div`
    font-size: 18px;
    color: ${({theme}) => theme.text_primary + 95};
    line-height: 32px;
    margin-bottom: 42px;

    @media screen and (max-width: 960px){
        text-align: center;
    }
    @media screen and (max-width: 640px){
        font-size: 16px;
        line-height: 32px;
    }
`;
export const ResumeButton = styled.div`
    cursor: pointer; 
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${({theme}) => theme.white};
    /* // text-align: center; */
    border-radius: 20px;
    font-size: 20px;
    font-weight: 500;
    transition: all .2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294,100%,50%,1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294,100%,50%,1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294,100%,50%,1) 100%);
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    
    /* // &:hover{
    //     transform: scale(1.05);
    //     transition: all .4s ease-in-out;
    //     box-shadow: 20px 20px 60px #1f2634;
    //     filter: brightness(1); 
    // } */

    a{
        color: ${({theme}) => theme.white};
        text-decoration: none;
    }
    span{
        text-align: center;
        .icon{
            font-weight: 600;
            padding-top: 10px;
        }
    } 
    
    @media screen and (max-width: 640px){
        font-size: 18px;
        padding: 12px 0;
        /* line-height: 32px; */
    }
`;
export const Img = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
    origin: center;
    img{
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 50%; 
        // border-radius: 10%;
        max-width: 400px;
        max-height: 400px;
        object-fit: cover;
        object-position: center;
        border: 2px solid ${({theme}) => theme.primary};

        @media screen and (max-width: 768px){
            max-width: 400px;
            max-height: 400px;
            border-radius: 50%;
        }
    
        @media screen and (max-width: 640px){
            max-height: 300px;
            border-radius: 50%;
            // border-radius: 5%;
        }
    }
`;



