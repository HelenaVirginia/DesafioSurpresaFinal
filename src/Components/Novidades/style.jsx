import styled from "styled-components";

export const Novidades = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background: #1E3932;



  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1200px;
    margin: 20px auto;
    gap: 20px;
  }

  .texto {
    flex: 1;
    h1 {
      font-size: 2.5rem;
      color: #ffff;
    }

    h2 {
      font-size: 1.8rem;
      color: #ffff;
      margin-bottom: 10px;
    }

    p {
      margin-top: 10px;
      font-size: 1rem;
      line-height: 1.5;
      color: #ffff;
    }

    .saibaMais {
      margin: 20px 0;
      padding: 20px 80px;
      background-color: #037143;
      color: #fff;
      border-style: none;
      font-family: "Inter", sans-serif;
      font-size: 1.5rem;
      fonr-weight: 700;
      border-radius: 35px;
      cursor: pointer;
      transition: background-color 0.4s ease;

      &:hover {
        background-color: #025731;
      }
    }
  }

  .imageWrapper {
    flex: 1;
    text-align: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
