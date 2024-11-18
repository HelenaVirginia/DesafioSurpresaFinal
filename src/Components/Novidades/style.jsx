import styled from "styled-components";

export const StyledNewsSection = styled.section`
    flex: 1;
    height: 100%;

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
        }

        h2 {
            align-self: flex-start;
            font-weight: 400;
            font-size: 3.8rem;
        }

        span {
            color: #038c4a;
            font-weight: 800;
        }

        p {
            font-weight: 400;
            margin-bottom: 25px;
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
        margin-bottom: 25px;

        img:hover {
            transform: translateY(-5px) rotate(15deg);
            transition: 0.8s ease;
        }
    }
`;
