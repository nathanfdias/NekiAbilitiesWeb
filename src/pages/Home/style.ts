import styled from "styled-components";
import imageRight from "../../assets/bab.jpg";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
`;

export const HomeBackground = styled.div`
background-color: black;
height: 100%;
display: flex;
align-items: center;
  /* height: 100%;
  background-image: url(${imageRight});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  @media (max-width: 879px) {
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)),url(${imageRight});
  } */
`;

export const HomeDescript = styled.div`
  width: 540px;
  height: 400px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
  height: 6rem;
`;

export const DescriptText = styled.div`
  font-size: 1.4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

export const ButtonAccess = styled.button`
  margin-top: 1rem;
  padding-inline: 1.6rem;
  padding-block: 1rem;
  font-size: 1.2rem;
  border: 1px solid #fff3;
  background-color: transparent;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #fff1;
  }
`;