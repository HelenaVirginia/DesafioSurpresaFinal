import styled from "styled-components";

export const Sobre = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .content {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    gap: 30px;
    align-items: center;
  }

  .imageWrapper {
    flex: 1;

    img {
      width: 100%;
      border-radius: 15px;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .textContent {
    flex: 1;
    padding: 20px;

    h1 {
      font-size: 2.5rem;
      color: #025731;
      margin-bottom: 15px;
    }

    h2 {
      font-size: 1.8rem;
      color: #037143;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
      color: #444;
      margin-bottom: 20px;
    }

    .exploreButton {
      padding: 10px 20px;
      background-color: #037143;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #025731;
      }
    }
  }
`;
