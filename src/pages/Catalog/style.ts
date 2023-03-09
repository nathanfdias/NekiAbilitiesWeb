import styled from "styled-components";

export const AbilitysContainer = styled.div`
    min-height: 100vh;
    background-color: rgba(208, 211, 211, 0.356);
    display: flex;
    flex-direction: column;
`;

export const AbilitysBoxContainer = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AbilitysBoxTitle = styled.h2`
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
`;

export const FormInput = styled.input`
    width: 300px;
    height: 40px;
    padding: 10px 20px;
    border-style: none;
    border: 0 none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    margin-top: 3rem;
    margin-left: 4rem;
`;

export const CardAbilityContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    background-color: white;
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(128, 128, 128, 0.39);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const InputCheckbox = styled.input`
    height: 1.3rem;
    width: 1.3rem;
`;

export const AbilitysBoxDescript = styled.p`
    font-size: 1.1rem;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    margin-top: 4px;
`;

export const AbilitysMap = styled.div`
    width: 80%;
    min-height: 80vh;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    overflow: auto;
`;

export const CreateAbilityButton = styled.button`
    margin: 48px 56px 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 200px;
    height: 40px;
    border-style: none;
    border: 0 none;
    outline: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bolder;
    background-color: #2a3e4e;
    color: white;
    cursor: pointer;
`;

export const FormInputContainer = styled.div`
    margin-bottom: 4rem;
`;

export const FormInputContainerAbilitys = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const AbilityImage = styled.image`
    width: 140px;
    height: 140px;
    background-color: #00A8FF;
`;

export const AbilitysNewAbilityContainer = styled.button`
    margin-block: 100px;
    display: flex;
    justify-content: center;
    align-self: center;
    width: 400px;
    padding-inline: 40px;
    padding-block: 10px;
    font-size: 22px;
    border: 1px solid #2a3e4e;
    background-color: #2a3e4e;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition-delay: 100ms;
`;