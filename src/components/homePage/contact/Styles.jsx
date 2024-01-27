import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    /* padding: 100px 0px ; */
    padding-bottom: 6rem; 
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
export const FormContainer = styled.form`
    text-align: center;
    z-index: 1;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.card};
    width: 400px;
    padding: 4rem 5rem 4rem 4rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    box-shadow: rgba(23,92,230, 0.15) 0px 4px 24px;
    /* border: 0.1px solid #306ee8; */

    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0, 0.2);
        /* transform: translateY(-5px); */
    }
    @media screen and (max-width: 768px){
        width: 300px;
        padding: 40px 50px 40px 40px;
    }
`;
export const TitleInput = styled.div`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 8px;
    // margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};

    @media screen and (max-width: 768px){
        // margin-top: 12px;
        font-size: 14px;
    }
`;
export const FormInput = styled.input`
    width: 100%;
    margin: .5rem 0;
    padding: .8rem 0 .8rem .8rem;
    border-radius: .5rem;
    border: 1px solid ${({ theme }) => theme.text_primary+ 80};
    color: ${({ theme }) => theme.text_primary};
    background-color: ${({ theme }) => theme.card};
    text-transform: none;

    &:focus{
        border: 0.1px solid #306ee8;
        border-bottom-width: 2px;
    }
`;
export const Textearea = styled.textarea`
    height: 4rem;
    width: 100%;
    padding: .8rem 0 .8rem .8rem;
    // padding: 1rem 0; 
    border-radius: .5rem;
    margin: .5rem 0;
    color: ${({ theme }) => theme.text_primary};
    border: 1px solid ${({ theme }) => theme.text_primary+ 80};
    background-color: ${({ theme }) => theme.card};
    font-size: 1rem;
    transition: .2s linear;
`;
export const FormButton = styled.div`
    width: 100%;
    justify-content: center;
    position: relative;
    align-items: center;

`;
export const Button = styled.input`
    width: 80%;
    margin: .5rem 0;
    border-radius: .5rem;
    border: 1px solid ${({ theme }) => theme.text_primary+ 80};
    color: ${({ theme }) => theme.text_primary};
    background-color: ${({ theme }) => theme.primary};
    text-transform: none;
    padding: .8rem;
    font-weight: 500;
    cursor: pointer;
    font-size: 18px;

    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`;

