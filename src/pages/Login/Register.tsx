import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Eye } from "phosphor-react";
import RegisterImg from "../../assets/imageLogin.jpg";
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
} from "./style";
import axios from 'axios';
import { toast } from 'react-toastify';

export function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (e: any) => {
    if (showPassword === false) {
      setShowPassword(true);
    }
    if (showPassword === true) {
      setShowPassword(false);
    }
  };

  function register(e : React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if(password === confirmPassword){
      axios
        .post("http://localhost:8080/auth/signup",{
            username: username,
            email: email,
            password: password,
        })
        .then(response => {
          console.log(response);
          toast.success('Usuário cadastrado com sucesso!');
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          toast.warning(error.response.data.errors[0]);
        });
    } else {
      toast.warning('Senhas inválidas');
    }
  }

  return (
    <LoginContainer>
      <LoginContent>
        <LeftContent>
          <h1>Cadastro</h1>
          <InputContainer>
            <LabelContent>Username:</LabelContent>
            <InputTextUsername type="text" placeholder="Digite seu username" 
            onChange={(e) => setUsername(e.target.value)}/>
            <LabelContent>Email:</LabelContent>
            <InputTextUsername type="text" placeholder="Digite seu email" 
            onChange={(e) => setEmail(e.target.value)}/>
            <LabelContent>Password:</LabelContent>
            <InputPasswordContent>
              <InputTextPassword
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputPasswordVisibility>
                <Eye onClick={(e) => handleClickShowPassword(e)}/>
              </InputPasswordVisibility>
            </InputPasswordContent>
            <LabelContent>Confirm Password:</LabelContent>
            <InputPasswordContent>
              <InputTextPassword
                type={showPassword ? "text" : "password"}
                placeholder="Confirme sua senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputPasswordVisibility>
                <Eye onClick={(e) => handleClickShowPassword(e)}/>
              </InputPasswordVisibility>
            </InputPasswordContent>
          </InputContainer>
          <ButtonLogin onClick={(e) => register(e)}>Cadastrar</ButtonLogin>
          <p>
            Retornar para a tela de <NavLink to="/login">Login</NavLink>
          </p>
        </LeftContent>
        <RightContent>
          <RightContentImg src={RegisterImg} />
        </RightContent>
      </LoginContent>
    </LoginContainer>
  );
}
