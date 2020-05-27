import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 10px;
  background-color: #222;
`;

export const Logo = styled(Link)`
  text-decoration: none;

  h1 {
    font-size: 25px;
    color: #fff;
    font-weight: bold;
  }
`;

export const Cadastro = styled(Link)`
  text-decoration: none;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #222;
    color: #fff;
    border: 0px;
    border-radius: 5px;
    padding: 5px;
    transition: background-color 0.4s;

    &:hover {
      background-color: #7159c1;
    }

    strong {
      font-size: 16px;
      font-weight: bold;
      margin-right: 3px;
    }
  }
`;
