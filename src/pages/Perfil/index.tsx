import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
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
  SkillTextEmpty,
  SkillEmptyContainer
} from "./style";
import { Navbar } from "../../components/Navbar/Navbar";
import { Popup } from "../../components/popup";

import api from "../../service/api";
import { getUserLocalStorage } from "../../context/authProvider/util";

interface IUserAbilities {
  id: number;
  username: string;
  userAbility: Array<IUserAbility>;
}

interface IUserAbility {
  id: number;
  knowledgeLevel: number;
  ability: {
    id: number;
    name: string;
    version: string;
    description: string;
    image_url: string;
  };
}

export function Perfil() {
  const [popup, setPopup] = useState(false);
  const [userAbilities, setUserAbilities] = useState<IUserAbilities>();
  const [idUserAbility, setIdUserAbility] = useState(0);
  const [idAbility, setIdAbility] = useState(0);
  const [knowledgeLevel, setKnowledgeLevel] = useState(0);
  const user = getUserLocalStorage();

  useEffect(() => {
    api
      .get(`/users/${user?.id}`)
      .then((response) => {
        setUserAbilities(response.data);
      })
      .catch((error) => {})
      .finally(() => {});
  }, [user?.id]);

  const deleteUserAbility = (idUserAbility: number) => {
    api
      .delete(`/userAbility/${idUserAbility}`)
      .then((response) => {
        toast(`UserAbility deletada id: ${idUserAbility}`);
      })
      .catch((error) => {
        toast(error);
      })
      .finally(() => {
        refresh();
      });
  };

  function updateUserAbility() {
    api
      .put(`/userAbility/${idUserAbility}`, {
        user: {
          id: user?.id,
        },
        ability: {
          id: idAbility,
        },
        knowledgeLevel: knowledgeLevel,
      })
      .then((response) => {
        toast.success("Level Atualizado com sucesso!");
        setPopup(false);
      })
      .catch((error) => {
        toast.warning("Erro ao Atualizar");
      })
      .finally(() => {
        refresh();
      });
  }

  function handleSetValues(userAbility: IUserAbility) {
    setIdUserAbility(userAbility?.id);
    setPopup(true);
    setIdAbility(userAbility?.ability?.id);
  }

  const refresh = () => {
    window.location.reload();
  };

  return (
    <PerfilContainer>
      <Navbar />
      <PerfilBoxesContainer>
        {userAbilities?.userAbility.length === 0 ? (
          <SkillEmptyContainer>
            <SkillTextEmpty>Nenhuma skill cadastrada!</SkillTextEmpty>
          </SkillEmptyContainer>
        ) : (
          <>
            {userAbilities?.userAbility.map((userAbility) => {
              return (
                <PerfilItensMap key={userAbility?.id}>
                  <PerfilSkillBoxTitle>
                    <p>Skill: {userAbility?.ability?.name}</p>
                    <p>Version: {userAbility?.ability?.version}</p>
                    <p>Level: {userAbility?.knowledgeLevel}</p>
                  </PerfilSkillBoxTitle>
                  <SkillImage src={userAbility?.ability?.image_url} />
                  <SkillBoxButton onClick={() => handleSetValues(userAbility)}>
                    Level Edit
                  </SkillBoxButton>
                  <SkillBoxButton
                    onClick={() => deleteUserAbility(userAbility?.id)}
                  >
                    Delete Skill
                  </SkillBoxButton>
                </PerfilItensMap>
              );
            })}
          </>
        )}
        <Popup trigger={popup} setTrigger={setPopup}>
          <FormEditPopupContent>
            <InputEditLevel
              placeholder="Digite o Level 1-10"
              type="number"
              min={1}
              max={10}
              onChange={(e) => setKnowledgeLevel(parseInt(e.target.value))}
            />
            <ButtonEditLevelPerfil onClick={() => updateUserAbility()}>
              Enviar
            </ButtonEditLevelPerfil>
          </FormEditPopupContent>
        </Popup>
      </PerfilBoxesContainer>
    </PerfilContainer>
  );
}
