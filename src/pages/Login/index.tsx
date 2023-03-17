import { useState } from "react";
import { Eye } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/imageLogin.jpg";
import {
  ButtonLogin,
  InputContainer,
  InputPasswordContent,
  InputPasswordVisibility,
  InputTextPassword,
  InputTextUsername,
  LabelContent,
  LeftContent,
  LoginContainer,
  LoginContent,
  RightContent,
  RightContentImg,
  Subtitle,
  CheckBoxRemembered,
  Label,
  CheckBoxContainer
} from "./style";
import { toast } from 'react-toastify';
import { useAuth } from "../../utils/useAuth";
import api from '../../service/api';

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = (e: any) => {
    if (showPassword === false) {
      setShowPassword(true);
    }
    if (showPassword === true) {
      setShowPassword(false);
    }
  };

  const handleSignIn = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
    api
    .post("/auth/signin", {
      username: username,
      password: password,
    })
    .then((request) => {
      if(checked){
        const now = new Date(); // Cria um objeto Date com a data e hora atual
        now.setFullYear(now.getFullYear() + 1); // Adiciona 1 ano ao valor atual do ano
        const timestamp = now.getTime(); // Obtém o timestamp em milissegundos
        localStorage.setItem('cacheTime', timestamp.toString());
        toast.success("Login successful !");
        auth.authenticate(request.data);
        navigate("/");
      } else {
        const now = Math.floor(Date.now() / 1000); // Cria um objeto Date com a data e hora atual
        const timestamp = now + 3600; // Obtém o timestamp em milissegundos
        localStorage.setItem('cacheTime', timestamp.toString());
        toast.success("Login successful !");
        auth.authenticate(request.data);
        navigate("/");
      }
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
};


  return (
    <LoginContainer>
      <LoginContent>
        <LeftContent>
          <h1>Bem vindo!</h1>
          <Subtitle>
            Faça login para acessar nosso site, ou cadastre-se
          </Subtitle>
          <InputContainer>
            <LabelContent>Username:</LabelContent>
            <InputTextUsername
              type="text"
              placeholder="Digite seu username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <LabelContent>Password:</LabelContent>
            <InputPasswordContent>
              <InputTextPassword
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputPasswordVisibility>
                <Eye onClick={(e) => handleClickShowPassword(e)} />
              </InputPasswordVisibility>
            </InputPasswordContent>
            <CheckBoxContainer>
              <CheckBoxRemembered type="checkbox" id="check" name="check" onClick={() => setChecked(true)}/>
              <Label>Lembrar de mim</Label>
            </CheckBoxContainer>
          </InputContainer>
          <ButtonLogin onClick={(e) => handleSignIn(e)}>
            Login
          </ButtonLogin>
          <p>
            Não possui uma conta? <NavLink to="/register">Cadastre-se</NavLink>
          </p>
        </LeftContent>
        <RightContent>
          <RightContentImg src={LoginImg} />
        </RightContent>
      </LoginContent>
    </LoginContainer>
  );
}
