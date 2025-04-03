import React, {useState} from "react";

import {MdSearch} from 'react-icons/md';

import { Container,Logo,Title,Form, Input, Button  } from "./styles";

import gitHubLogo from "../../assets/images/icons8-github.svg";

/* eslint-disable react/function-component-definition */
const MainPage = () => {
  const [login, setLogin] = useState('')
  return (
  <Container>
    <Logo src={gitHubLogo} alt="API-GIT"/>
    <Title>API GIT</Title>
    <Form>
      <Input placeholder="usuário" value={login} onChange={(event) => setLogin(event.target.value)}/>
      <Button to={`/${login}/repositories`}>
      <MdSearch size={42}/>
      </Button>
    </Form>
  </Container>
  )
};
/* eslint-enable react/function-component-definition */

export default MainPage;

