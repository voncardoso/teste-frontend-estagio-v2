import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #FFFFFF;
        --background-secundario: #EFF3F5;

        --text: #404D57;

        --color-operendo: #2ECC71;
        --color-parado: #F1C40F;
        --color-manutencao: #E74C3C;

        --blue: #55A1DD;

    }
    
    *{
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        margin: 0px;
        color: #404D57;
        --text-primerio: 'Roboto', sans-serif;
        --type-secundario: 'Roboto Condensed', sans-serif;
        font-family: var(--text-primerio);
    }

    h1,h2,h3,h4, p{
        margin: 0px;
    }

    ul,li{
        list-style: none;
        padding: 0px;
        margin: 0px;
    }

    button, input{
        display: block;
        font-size: 1rem;
        font-family: var(--text-primerio);
    }

    .dashboard{
        display: flex;
    }
`;
