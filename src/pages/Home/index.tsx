import { HomeContainer, HomeBackground, HomeDescript, LogoContainer, DescriptText, ButtonAccess} from './style';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';

export function Home() {
    const navigate = useNavigate();
    return(
        <HomeContainer>
            <Navbar />
            <HomeBackground>
                <HomeDescript>
                    <LogoContainer>
                    </LogoContainer>
                    <DescriptText>
                        <h1>Neki Abilities</h1>
                        <p>Your ability control!</p>
                    </DescriptText>
                    <ButtonAccess onClick={() => navigate('/products')}>
                        Menu Acess 
                    </ButtonAccess>
                </HomeDescript>
                <p>Teste</p>
            </HomeBackground>
        </HomeContainer>
    )
}