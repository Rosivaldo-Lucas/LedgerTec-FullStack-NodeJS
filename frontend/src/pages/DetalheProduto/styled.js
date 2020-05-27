import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;

  button {
    margin-top: 10px;
    border-radius: 4px;
    border: 0px;
    font-size: 16px;
    color: #fff;
    background-color: #7159c1;
    padding: 10px;
    font-weight: bold;
    width: 120px;
    transition: background-color 0.5s;

    &:hover {
      background-color: ${darken(0.3, '#7159c1')};
    }
  }
`;

export const ProdutoTable = styled.table`
  width: 70%;

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
    transition: background-color 0.6s;

    &:hover {
      background-color: ${darken(0.3, '#7159c1')};
    }
  }
`;
