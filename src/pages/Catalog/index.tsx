import { useEffect, useState } from 'react';
import { AbilityImage,AbilitysBoxContainer,AbilitysBoxDescript,AbilitysBoxTitle,AbilitysContainer,AbilitysMap,
AbilitysNewAbilityContainer,CreateAbilityButton,FormInputContainerAbilitys, FormInput, CardAbilityContainer, InputCheckbox } from './style';
import { Navbar } from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import api from "../../service/api";

interface IAbility {
    id: number;
    name: string;
    version: string;
    description: string;
    image_url: string;
}

interface IAbilityInfo {
    abilities: number[];
    response: number[];
  }

export function Catalog() {
    const [abilities, setAbilities] = useState<IAbility[]>([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {
        api
          .get(`/abilities`)
          .then((response) => {
            setAbilities(response.data);
          })
          .catch((error) => {})
          .finally(() => {});
      }, []);

      const [abilityInfo, setAbilityInfo] = useState<IAbilityInfo>({
        abilities: [],
        response: [],
      });
      
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        const { abilities } = abilityInfo;

        if (checked) {
            setAbilityInfo({
            abilities: [...abilities, parseInt(value)],
            response: [...abilities, parseInt(value)],
          });
          console.log(value)
        } else {
            setAbilityInfo({
            abilities: abilities.filter((e) => e !== parseInt(value)),
            response: abilities.filter((e) => e !== parseInt(value)),
          });
        }
      };

      console.log(abilities);

      const abilitiesFiltrados = abilities?.filter((abilities) => abilities.name.toUpperCase().includes(busca.toUpperCase()))

    return(
        <AbilitysContainer>
            <Navbar/>
            <AbilitysBoxContainer>
                <AbilitysMap>
                    <FormInputContainerAbilitys>
                        <FormInput type="text" placeholder="Pesquise as Skills"  onChange={(e) => setBusca(e.target.value)}/>
                        <Link to="/abilityForm">
                            <CreateAbilityButton >
                                    Criar Nova Skill
                            </CreateAbilityButton>
                        </Link>
                    </FormInputContainerAbilitys>
                     {abilitiesFiltrados?.map((ability,index) => ( 
                    <CardAbilityContainer key={index}>
                        <AbilityImage src={ability.image_url}/>
                        <div>
                            <AbilitysBoxTitle>{ability.name}</AbilitysBoxTitle>
                            <AbilitysBoxDescript>Version: {ability.version}</AbilitysBoxDescript>
                            <AbilitysBoxDescript>{ability.description}</AbilitysBoxDescript>
                        </div>
                        <InputCheckbox
                            type="checkbox"
                            name="languages"
                            value={ability?.id}
                            id="flexCheckDefault"
                            onChange={handleChange}
                        />
                    </CardAbilityContainer>
                        ))} 
                    <AbilitysNewAbilityContainer>Adicionar Skills</AbilitysNewAbilityContainer>
                </AbilitysMap>
            </AbilitysBoxContainer>
        </AbilitysContainer>
    );
}