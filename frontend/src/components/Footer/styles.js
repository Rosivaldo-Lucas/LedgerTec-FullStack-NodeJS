import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #222;
  position: absolute;
  bottom: 0;
  text-align: left;
  padding: 10px;

  div {
    margin-right: 10px;

    strong {
      font-size: 17px;
      color: #fff;
    }

    span {
      color: #fff;
      font-size: 15px;
      font-weight: 600;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      margin-left: 5px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      transition: color 0.5s;

      &:hover {
        color: ${darken(0.2, '#fff')};
      }
    }
  }
`;
