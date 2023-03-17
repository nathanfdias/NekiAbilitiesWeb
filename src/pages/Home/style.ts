import styled from "styled-components";
import imageRight from "../../assets/imageRight.jpg";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
`;

export const HomeBackground = styled.div`
height: 100%;
display: flex;
align-items: center;
background-color: #FFFAFA;
@media screen and (max-width: 820px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HomeDescript = styled.div`
  width: 40%;
  height: 100%;
  color: #11114E;
  font-family: Georgia, 'Times New Roman', Times, serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  @media screen and (max-width: 820px){
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const HomeImageIlustration = styled.div`
  height: 80%;
  width: 60%;
  background-image: url(${imageRight});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 1155px){
    height: 100%;
    width: 100%;
    background-size: contain;
  };
  @media screen and (max-width: 820px){
    display: none;
  }
`;

export const Test = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  @media screen and (max-width: 820px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 6rem;
`;

export const DescriptText = styled.div`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

export const ButtonAccess = styled.button`
align-items: center;
background-clip: padding-box;
background-color: #00A8FF;
border: 1px solid transparent;
border-radius: .25rem;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
box-sizing: border-box;
color: #fff;
cursor: pointer;
display: inline-flex;
font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
font-size: 1.2rem;
font-weight: 600;
justify-content: center;
line-height: 1.25;
margin: 0;
min-height: 3.8rem;
padding: calc(.875rem - 1px) calc(1.5rem - 1px);
position: relative;
text-decoration: none;
transition: all 250ms;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
vertical-align: baseline;
width: auto;
&:hover{
    background-color: #00A6FF;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
}
&:focus{
    background-color: #00A6FF;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}
&:active{
    background-color: #11B8FF;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
   transform: translateY(0);
}
`;