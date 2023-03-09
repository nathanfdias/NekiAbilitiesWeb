import styled from 'styled-components';

export const SkillsContainer = styled.div`
    min-height: 100vh;
    background-color: rgba(208, 211, 211, 0.356);
    display: flex;
    flex-direction: column;
`;

export const FormAddSkill = styled.div `
    height: 90vh; 
    width: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: center;
`;

export const FormAddSkillContainer = styled.form`
    width: 80%; 
    height: 600px; 
    border-radius: 18px; 
    border: 1px solid #2a3e4e; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-around; 
    padding-inline: 40px; 
    background-color: white;
`;

export const SkillCreateMensageTitle = styled.h2`
    color: #2a3e4e; 
    font-size: 18px;
`;

export const ButtonFeedEnviar = styled.input` 
    height: 32px; 
    padding-inline: 60px; 
    border-radius: 25px; 
    border: none; 
    font-size: 20px; 
    background-color: #2a3e4e; 
    color: white; 
    font-weight: bolder; 
    cursor: pointer; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
    width: 40%; 
    align-self: center;
`;

export const InputSkillCreate = styled.input` 
    height: 40px; 
    padding-left: 20px; 
    border: none; 
    background-color: rgba(201, 201, 201, 0.404); 
    border-radius: 10px; 
    font-size: 18px;
`;

export const Textarea = styled.textarea`
    padding-top: 10px; 
    padding-left: 20px; 
    height: 160px; 
    border: none; 
    background-color: rgba(201, 201, 201, 0.404); 
    border-radius: 10px; 
    font-size: 18px;
`;

export const InputContainerCreateSkill = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    gap: 40px;
`;