import {ButtonFeedEnviar,FormAddSkill,FormAddSkillContainer,InputContainerCreateSkill,InputSkillCreate,SkillCreateMensageTitle,Textarea, SkillsContainer} from './style';
import { Navbar } from '../../components/Navbar/Navbar';

export function AbilityForm() {
    return(
        <SkillsContainer>
            <Navbar />
            <FormAddSkill>
                <FormAddSkillContainer>
                    <h2>Create Ability</h2>
                    <InputContainerCreateSkill>
                        <InputSkillCreate 
                            type="text"
                            placeholder="Skill Name"
                        />
                        <InputSkillCreate 
                            type="text"
                            placeholder="Version"
                        />
                        <InputSkillCreate 
                            type="text"
                            placeholder="Url image"
                        />

                        <SkillCreateMensageTitle>Description:</SkillCreateMensageTitle>
                        <Textarea 
                            placeholder="Skill description..."
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