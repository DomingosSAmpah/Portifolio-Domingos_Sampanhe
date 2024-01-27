import styled from "styled-components";

export const CardProject = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0, .4);
    overflow: hidden;
    transition: all .5s ease-in-out;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    
    &:hover{
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0, .6);
        filter: brightness(1.1);
    }
`;
export const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0, .3);
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
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`;
export const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;
export const Title = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;
export const Date = styled.div`
    font-size: 12px;
    font-weight: 300;
    margin-left: 2px;
    color: ${({ theme }) => theme.text_secondary + 80};

    @media (max-width: 768px){
        font-size: 10px;
    }
`;
export const Desc = styled.div`
    font-weight: 300;
    font-size: 13px;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    max-height: 100%;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-top: 8px;
`;
export const Members = styled.div`
    display: flex;
    /* flex-direction: end; */
    align-items: center;
    padding-left: 10px;
`;
export const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0, .2);
    border: 3px solid ${({ theme }) => theme.card};
`;

export const ContainerButton = styled.div`
    width: 50%;
    display: flex;
    /* justify-content: center; */
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-height: 300px;
    padding: 0 6px;
    gap: 12px;
    /* @media screen and (max-width: 640px){
        display: none;
    } */
`;
export const Button = styled.a`
    background-color: transparent;
    color: ${({theme}) => theme.primary};
    /*  background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white}; */
    border: 1.8px solid ${({theme}) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    height: 40%;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
        /*  background-color: transparent;
         color: ${({theme}) => theme.primary}; */
    }
    @media screen and (max-width: 640px){
        font-size: 0.8rem;
    }
`;



