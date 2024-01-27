import styled from "styled-components";


// STYLES EXPERIENCE CARD
export const ExperienceCard = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0, 0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

    border: 0.1px solid #306ee8;
    box-shadow: rgba(23,92,230, 0.15) 0px 4px 24px;

    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0, 0.2);
        transform: translateY(-5px);
        .Document{
            display: flex;
        }
    }

    @media (max-width: 768px){
        padding: 8px 10px;
        gap: 12px;
        width: 300px;
    }
`;

export const Top = styled.div`
    display: flex;
    width: 100%;
    gap: 12px;
`;

export const Logo = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;

    @media (max-width: 768px){
        height: 40px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    line-height: 1.3;
`;
export const Role = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary + 99};

    @media (max-width: 768px){
        font-size: 14px;
    }
`;
export const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};

    @media (max-width: 768px){
        font-size: 12px;
    }
`;
export const Duration = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};

    @media (max-width: 768px){
        font-size: 10px;
    }
`;
export const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    text-align: justify;
    line-height: 1.5;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;

    @media (max-width: 768px){
        font-size: 12px;
    }
`;
export const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: 10px;
`;
export const ItemWrapper = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;
export const Item = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};

    @media (max-width: 768px){
        font-size: 12px;
    }
`;
export const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;