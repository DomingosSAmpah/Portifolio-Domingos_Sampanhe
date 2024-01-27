import styled from "styled-components";

export const Title = styled.div`
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin-top: 16px;
    color: ${({ theme }) => theme.text_primary};

    @media screen and (max-width: 768px){
        margin-top: 12px;
        font-size: 32px;   
    }
`;
export const Desc = styled.div`
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`;