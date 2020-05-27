import React from 'react';
import { FcPlus } from 'react-icons/fc';

import { Container, Logo, Cadastro } from './styles';

function Header() {
  return (
    <Container>
      <Logo to="/">
        <h1>GESTÃO DE PRODUTOS</h1>
      </Logo>

      <Cadastro to="/cadastros">
        <button type="button">
          <strong>Cadastrar produto</strong>
          <FcPlus size={20} />
        </button>
      </Cadastro>
    </Container>
  );
}

export default Header;
