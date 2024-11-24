import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    width: 100%;
    height: 18vh;

    .headerBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 85%;

        nav {
            display: flex;
            width: 55%;
            height: auto;
        }

        .navLinks {
            display: flex;
            width: 40wn;
            gap: 60px;
            list-style-type: none;
            justify-content: space-around;

            li a {
                color: #1e3932;
                text-decoration: none;
                font-size: 18px;
                font-weight: 500;
                transition: color 0.3s;

                &:hover {
                    color: palevioletred;
                }
            }
        }
    }
`;