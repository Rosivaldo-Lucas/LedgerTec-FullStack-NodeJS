import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;

export const ProdutoTable = styled.table`
  width: 70%;
  margin: 0px auto;

  thead th {
    text-align: left;
    font-size: 20px;
    padding: 12px;
    color: #222;
    text-transform: uppercase;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #eee;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    color: #222;
  }

  button {
    padding: 6px;
    border: 0px;
    border-radius: 4px;
    background-color: #7159c1;
    transition: background-color 0.5s;

    &:hover {
      background-color: ${darken(0.3, '#7159c1')};
    }

    span {
      color: #fff;
    }
  }

  div {
    background-color: #7159c1;
    border-radius: 4px;
    padding: 3px;
    text-align: center;
    transition: background-color 0.5s;

    &:hover {
      cursor: pointer;
      background-color: ${darken(0.3, '#7159c1')};
    }
  }
`;

export const Pesquisa = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #222;
  margin-bottom: 30px;

  input {
    width: 100%;
    height: 35px;
    border: solid 1px #999;
    border-radius: 4px;
    padding: 10px;
    font-size: 17px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    border-radius: 5px;
    margin-top: 8px;
    padding: 7px;
    background-color: #7159c1;
    transition: background-color 0.5s;

    &:hover {
      background-color: ${darken(0.3, '#7159c1')};
    }

    span {
      margin-right: 5px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
`;

export const ButtonProxAnt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 5px;
    border: 0px;
    border-radius: 4px;
    background-color: #7159c1;
    transition: background-color 0.5s;

    &:hover {
      background-color: ${darken(0.3, '#7159c1')};
    }

    &:disabled {
      opacity: 0.7;
    }

    &:disabled:hover {
      cursor: not-allowed;
      background-color: #7159c1;
    }

    span {
      margin: 0px 5px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
`;
