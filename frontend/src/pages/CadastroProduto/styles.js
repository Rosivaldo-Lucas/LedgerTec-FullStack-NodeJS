import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #222;
  margin-top: 20px;
  padding: 10px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 7px;

    input {
      height: 30px;
      border: 1px solid #999;
      border-radius: 3px;
      padding: 10px;
    }
  }

  span {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  select {
    border: 1px solid #999;
    border-radius: 4px;
    height: 30px;
    font-size: 14px;
    font-weight: 600;
    background-color: #fff;
  }

  button {
    border: 0px;
    border-radius: 4px;
    background-color: #7159c1;
    color: #fff;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 12px;
    margin-right: 10px;
  }
`;
