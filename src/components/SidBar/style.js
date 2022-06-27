import styled from "styled-components";

export const Container = styled.section`
  max-width: 400px;
  width: 100%;

  h4 {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0px 20px;
    font-family: var(--type-secundario);
    font-weight: medium;
  }

  ul {
    max-width: 364px;
    padding: 0px 20px;
    overflow-y: auto;
    height: 80vh;

    li {
      display: flex;
      align-items: center;
      height: 70px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      margin-bottom: 5px;
      background: #f8fafb;
      img {
        height: 50px;
        margin-left: 10px;
      }

      div {
        display: grid;
        width: 90%;
        grid-template-columns: 1fr;
        margin-left: 20px;
        height: 50px;
        span {
          font-size: 1rem;
          align-self: start;
        }
        p {
          font-size: 0.875rem;
          align-self: end;
        }
      }

      .status {
        height: 70px;
        width: 15px;
        background: var(--color-parado);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`;
