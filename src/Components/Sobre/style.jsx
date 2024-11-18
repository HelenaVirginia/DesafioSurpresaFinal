import styled from "styled-components";

export const StyledNewsSection = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 40px;

    img {
        width: 22%;
        border-radius: 8px;
    }

    .aboutText {
        display: flex;
        flex-direction: column;
        width: 45%;
        height: 100%;
        justify-content: center;
        align-items: flex-start;

        h3 {
            align-self: flex-start;
            font-family: "Inter", serif;
            font-weight: 600;
            font-size: 1.1rem;
            color: #555;
        }

        h2 {
            align-self: flex-start;
            font-weight: 400;
            font-size: 3.8rem;
            margin-bottom: 15px;
        }

        p {
            margin-bottom: 30px;
            font-weight: 400;
            line-height: 1.6;
            color: #333;
        }
    }
`;
