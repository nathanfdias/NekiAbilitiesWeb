import { HomeContainer, HomeBackground, HomeDescript, DescriptText, Test, ButtonAccess,Logo ,HomeImageIlustration} from './style';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import logo from '../../assets/Logo-Neki2.png';

export function Home() {
    const navigate = useNavigate();
    return(
        <HomeContainer>
            <Navbar />
            <HomeBackground>
                <HomeDescript>
                    <Test>
                        <div>
                            <Logo src={logo} />
                        </div>
                        <DescriptText>
                            <h1>Neki Abilities</h1>
                            <p>A website project to help neki developers manage their abilities.</p>
                        </DescriptText>
                        <ButtonAccess onClick={() => navigate('/catalog')}>
                            See the abilities
                        </ButtonAccess>
                    </Test>
                </HomeDescript>
                <HomeImageIlustration />
            </HomeBackground>
        </HomeContainer>
    )
}