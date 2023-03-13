import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ButtonFeedEnviar,FormAddSkill,FormAddSkillContainer,InputContainerCreateSkill,InputSkillCreate,SkillCreateMensageTitle,Textarea, SkillsContainer} from './style';
import { Navbar } from '../../components/Navbar/Navbar';
import { toast } from "react-toastify";
import api from "../../service/api";

export function AbilityForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [version, setVersion] = useState("");

    const navigate = useNavigate();

    function adicionar(e: { preventDefault: () => void; }) {
        e.preventDefault();
        api
        .post(`/abilities`,
        {
            description: description,
            image_url: imageURL,
            name: name,
            version: version
        })
        .then((response: any) => {
            console.log(response);
            toast.success("Skill criada com sucesso!");
            navigate("/catalog");
          })
          .catch((error: any) => {
            toast.warning(error);
          });
      }

    return(
        <SkillsContainer>
            <Navbar />
            <FormAddSkill onSubmit={adicionar}>
                <FormAddSkillContainer>
                    <h2>Criar Skill</h2>
                    <InputContainerCreateSkill>
                        <InputSkillCreate 
                            type="text"
                            placeholder="Skill Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <InputSkillCreate 
                            type="text"
                            placeholder="Version"
                            value={version}
                            onChange={(e) => setVersion(e.target.value)}
                        />
                        <InputSkillCreate 
                            type="text"
                            placeholder="Url image"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                        />

                        <SkillCreateMensageTitle>Description:</SkillCreateMensageTitle>
                        <Textarea 
                            placeholder="Skill description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </InputContainerCreateSkill>
                    <ButtonFeedEnviar 
                        type="submit"
                    />
                </FormAddSkillContainer>
            </FormAddSkill>
        </SkillsContainer>
    )
}
