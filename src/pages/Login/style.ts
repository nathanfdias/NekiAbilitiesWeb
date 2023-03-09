import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Subtitle = styled.p`
    font-size: 1rem;
`;

export const LoginContent = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  font-size: 1.2rem;
`;

export const LeftContent = styled.div`
  height: 100%;
  width: 40%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 6%;
  padding-right: 4%;
  @media(max-width:1090px) {
    width: 50%;
  }
  @media(max-width:820px) {
    width: 100%;
    align-items: center;
    text-align: center;
    background-color: #fff;

}
`;

export const RightContent = styled.div`
  height: 100%;
  width: 60%;
  box-shadow: 
    rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 8px 8px,
    rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0.0) 0px 0px 0px;
  @media(max-width:1090px) {
    width: 50%;
  }

  @media(max-width:820px) {
    display: none;
  }
`;

export const RightContentImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  @media(max-width:820px) { 
    align-items: center;
    width: 80%;
  }
`;

export const InputTextUsername = styled.input`
  width: 80%;
  padding-block: 1rem;
  padding-left: 1rem;
  border: none;
  background-color: #0101;
  font-size: 0.9rem;
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const InputPasswordContent = styled.div`
  display: flex;
  width: 100%;
  @media(max-width:820px) { 
    width: 80%;
}
`;

export const InputTextPassword = styled.input`
  width: 70%;
  padding-block: 1rem;
  padding-left: 1rem;
  border: none;
  background-color: #0101;
  font-size: 0.9rem;
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
  @media(max-width:820px) { 
    align-items: center;
    width: 100%;
}
`;

export const InputPasswordVisibility = styled.div`
  width: 10%;
  background-color: #0101;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  cursor: pointer;
  color: #0008;
`;

export const ButtonLogin = styled.button`
  width: 10rem;
  background-color: #00A8FF;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1rem;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`;

export const LabelContent = styled.label`
    color: #000900;
    font-size: 1rem;
`
export const CheckBoxRemembered = styled.input`
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 1rem;
  padding-inline: 8px;
`;

export const CheckBoxContainer = styled.div`
  margin-top: 2rem;
`;