import React, { useState } from "react";
import {
  ButtonEditLevelPerfil,
  FormEditPopupContent,
  PerfilBoxesContainer,
  PerfilContainer,
  PerfilItensMap,
  PerfilSkillBoxTitle,
  InputEditLevel,
  SkillImage,
  SkillBoxButton,
} from "./style";
import { Navbar } from "../../components/Navbar/Navbar";
import { Popup } from "../../components/popup";

export function Perfil() {
  const [popup, setPopup] = useState(false);

  return (
    <PerfilContainer>
      <Navbar />
      <PerfilBoxesContainer>
        {/* Inicio Mapeamento */}
        {/* {data?.userSkill?.map((userSkill) => { return ( */}
        <PerfilItensMap>
          <PerfilSkillBoxTitle>
            <p>Skill: Teste</p>
            <p>Version: 9.9</p>
            <p>Level: 6</p>
          </PerfilSkillBoxTitle>
          <SkillImage />
          <SkillBoxButton onClick={() => setPopup(true)}>Level Edit</SkillBoxButton>
          <SkillBoxButton>Delete Skill</SkillBoxButton>
        </PerfilItensMap>
        {/* ); */}
        {/* })} */}
        <Popup trigger={popup} setTrigger={setPopup}>
          <FormEditPopupContent>
            <InputEditLevel
              placeholder="Digite o Level 1-10"
              type="number"
              min={1}
              max={10}
            />
            <ButtonEditLevelPerfil>
              Enviar
            </ButtonEditLevelPerfil>
          </FormEditPopupContent>
        </Popup>
      </PerfilBoxesContainer>
    </PerfilContainer>
  );
}
