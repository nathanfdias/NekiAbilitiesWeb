import { AbilityImage,AbilitysBoxContainer,AbilitysBoxDescript,AbilitysBoxTitle,AbilitysContainer,AbilitysMap,
AbilitysNewAbilityContainer,CreateAbilityButton,FormInputContainerAbilitys, FormInput, CardAbilityContainer, InputCheckbox } from './style';
import { Navbar } from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

export function Catalog() {
    return(
        <AbilitysContainer>
            <Navbar/>
            <AbilitysBoxContainer>
                <AbilitysMap>
                    <FormInputContainerAbilitys>
                        <FormInput type="text" placeholder="Pesquise as Skills" />
                        <Link to="/abilityForm">
                            <CreateAbilityButton >
                                    Criar Nova Skill
                            </CreateAbilityButton>
                        </Link>
                    </FormInputContainerAbilitys>
                    {/* Inicio do Mapper para puxar da API */}
                    <CardAbilityContainer key={1}>
                        <AbilityImage />
                        <div>
                            <AbilitysBoxTitle>Javascript</AbilitysBoxTitle>
                            <AbilitysBoxDescript>Version: 1.2</AbilitysBoxDescript>
                            <AbilitysBoxDescript>Linguagem de desenvolvimento</AbilitysBoxDescript>
                        </div>
                        <InputCheckbox
                            type="checkbox"
                            name="languages"
                            value={1}
                            id="flexCheckDefault"
                        />
                    </CardAbilityContainer>
                    {/* Fechamento */}
                    <AbilitysNewAbilityContainer>Adicionar Skills</AbilitysNewAbilityContainer>
                </AbilitysMap>
            </AbilitysBoxContainer>
        </AbilitysContainer>
    );
}