import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 20px 0px 40px 0px;
    font-family: 'Poppins', sans-serif;

    @media screen and (max-width: 960px){
        padding: 0px;
    }
`;
export const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
`;
export const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.primary};

    @media screen and (max-width: 768px){
        margin-top: 12px;
        font-size: 15px;
    }
`;
export const IconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    // text-align: center;
    color: ${({ theme }) => theme.text_secondary};

    .icon{}

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`;
export const Icon = styled.a`
    text-decoration: none;
    font-size: 30px;
    font-weight: 600;
    padding: 0px 20px 0px 0px;
    color: ${({ theme }) => theme.text_primary};
    transition: all .5s ease-in-out;

    &:hover{
        color: ${({ theme }) => theme.primary};
    }
    @media screen and (max-width: 768px){
        font-size: 25px;
    }
`;
export const Desc = styled.div`
    font-size: 14px;
    font-weight: 500; 
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
    
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.text_primary};
        &:hover{
            transition: all .5s ease-in-out;
            cursor: pointer;
            color: ${({ theme }) => theme.primary};
        }

    }

    @media screen and (max-width: 768px){
        margin-bottom: 20px;
    }
`;














