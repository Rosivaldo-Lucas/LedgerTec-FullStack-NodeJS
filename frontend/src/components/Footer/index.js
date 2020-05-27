import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <div>
        <strong>Autor:</strong>
        <span> Rosivaldo Lucas da Silva</span>
      </div>
      <a href="https://github.com/Rosivaldo-Lucas" target="blank">
        <AiFillGithub size={25} color="#fff" />
        <span>GitHub</span>
      </a>
    </Container>
  );
}

export default Footer;
