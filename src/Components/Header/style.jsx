import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
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
            width: 100%;
            gap: 60px;
            list-style-type: none;
            justify-content: flex-end;

            li a {
                color: #2c3e50;
                text-decoration: none;
                font-size: 18px;
                font-weight: 500;
                transition: color 0.3s;

                &:hover {
                    color: #1E3932;
                }
            }
        }
    }
`;
