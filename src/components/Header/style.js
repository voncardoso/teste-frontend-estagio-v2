import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  border-bottom: 2px solid #f8fafb;

  img {
    padding: 0px 20px;
  }

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    cursor: pointer;
    img {
      padding: 0px;
      margin-right: 5px;
    }
  }
`;
