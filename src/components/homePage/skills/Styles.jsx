import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 60px 0px;
`;
export const Wrapper = styled.div`
    max-width: 1200px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
`;
export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    gap: 30px;
`;
export const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: ${({ theme }) => theme.card};
    border: .1px solid #854ce6;
    border-radius: 16px;
    padding: 16px 32px;

    @media screen and (max-width: 768px){
        max-width: 400px;
        padding: 10px 36px; 
    }
    @media screen and (max-width: 500px){
        max-width: 330px;
        padding: 10px 36px;
    }
`;
export const SkillTitle = styled.h2`
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
    text-align: center;
`;
export const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
    gap: 12px;
`;
export const SkillItem = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 16px;
    gap: 8px;
    color: ${({ theme }) => theme.text_primary+ 80};
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.text_primary+ 80};
    padding: 10px 14px;
    font-weight: 400;

    @media screen and (max-width: 768px){
        font-size: 14px;
        padding: 8px 12px;
    }
    @media screen and (max-width: 500px){
        font-size: 14px;
        padding: 6px 8px;
    }
`;
export const SkillImage = styled.div`
    width: 24px;
    height: 24px;
`;
export const SkillICon = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: ${({ theme }) => theme.button};
    // &:hover{
    //      color: ${({ theme }) => theme.text_primary}; 
    // }
`;



