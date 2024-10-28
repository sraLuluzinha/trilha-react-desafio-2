import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    padding: 20px;
    border-radius: 8px;
    background-color: #2C2C2E;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }

    h3 {
        font-size: 28px;
        color: #FAFAFA;
        margin-bottom: 8px;
    }

    p {
        font-size: 16px;
        color: rgba(250, 250, 250, 0.6);
        margin-bottom: 20px;
        line-height: 1.5;
    }

    a.remover {
        color: #FF5C5C;
        font-weight: bold;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: #FF1E1E;
        }
    }

    hr {
        border: none;
        height: 1px;
        background-color: rgba(250, 250, 250, 0.6);
        margin: 20px 0;
    }
`;
