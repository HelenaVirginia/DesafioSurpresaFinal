import styled from "styled-components";

export const StyledSection = styled.section`
    
    flex: 1;
    height: 100%;
      flex-direction: column;
      align-items: center;

    .mainHomeContent {
        display: flex;
        flex-direction: row;
        width: 90%;
        flex: 1;
        height: 100%;
        position: relative;
    }

    .homeText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        padding: 0 60px;
        margin: 0 50px;

        h1 {
            font-family: "Inter", serif;
            font-weight: 300;
            align-self: flex-start;
            font-size: 3.2rem;
             margin-bottom: 5px;
        }

        h2 {
            align-self: flex-start;
            font-weight: 400;
            font-size: 3.8rem;
            margin-top: 15px;
        }

        span {
            color: #038c4a;
            font-weight: 800;
        }

        p {
            font-size: 1.5rem;
        }
    }

    .bg-green {
        background-color: #038c4a;
    }

    .bg-red {
        background-color: #8a0a10;
    }

    .bg-yellow {
        background-color: #dbcf14;
    }
    
    .colorCircles {
        display: flex;
        border-radius: 50%;
        position: fixed;
        top: 28%;
        right: -28%;
        width: 950px;
        aspect-ratio: 1;
        z-index: 1;

        img {
            position: absolute;
            bottom: 50%;
            right: 52%;
            width: 45%;
        }
    }

    .miniCups {
        display: flex;
        width: 260px;
        justify-content: center;
        height: 15%;
        align-self: flex-end;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        padding-right: 20px;
        margin-bottom: 70px;
    }
        button {
        background-color: #037143;
        color: white;
        border-style: none;
        font-family: "Inter", sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        border-radius: 35px;
        padding: 20px 80px;
        margin: 20px 0;
        cursor: pointer;
        transition: 0.4s ease;

        &:hover {
          background-color: #025130;
        }
      }
    }
  }
`;
