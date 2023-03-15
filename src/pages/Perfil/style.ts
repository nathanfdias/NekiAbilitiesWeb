import styled from "styled-components";

export const PerfilContainer = styled.div`
    min-height: 100vh;
    background-color: rgba(208, 211, 211, 0.356);
    display: flex;
    flex-direction: column;
`;

export const PerfilBoxContainer = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PerfilBoxesContainer = styled.div`
    margin: 60px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`;

export const PerfilSkillBoxTitle = styled.div`
    text-align: center;
    font-size: 18px;
    color: #2a3e4e;
`;

export const PerfilItensMap = styled.div`
    margin-top: 70px;
    min-height: 320px;
    margin-inline: 30px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding-block: 20px;
    background-color: white;
`;

export const FormEditPopupContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ButtonEditLevelPerfil = styled.div`
    height: 26px;
    width: 100px;
  padding-inline: 46px;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  background-color: #2a3e4e;
  color: white;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputEditLevel = styled.input`
    font-size: 1rem;
    min-width: 170px;
`;

export const SkillImage = styled.img`
    width: 140px;
    height: 140px;
    background-color: #00A8FF;
`;

export const SkillBoxButton = styled.button`
        padding-inline: 12px;
    padding-block: 6px;
    font-size: 14px;
    font-weight: bolder;
    cursor: pointer;
    border: 1px solid #2a3e4e;
    background-color: #2a3e4e;
    color: white;
`;

export const SkillTextEmpty = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  font-style: italic;
  text-align: center;
  margin: 1rem 0;
`;

export const SkillEmptyContainer = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
`;