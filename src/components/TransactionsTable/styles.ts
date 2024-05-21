import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px; /* Define a largura máxima do container */
  margin: 0 auto; /* Centraliza o container horizontalmente */
  margin-top: 1.5rem;

  table {
    width: 100%;
    border-spacing: 0;

    thead {
      tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: #f0f0f0;
        border-radius: 0.25rem;

        th {
          flex: 1;
          text-align: left;
          padding: 0.5rem;
          color: #999; /* Define uma cor cinza clara para o texto dos cabeçalhos */
        }
      }
    }

    tbody {
      tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: #fff;
        border-radius: 0.25rem;
        margin-bottom: 0.8rem; /* Espaço entre as linhas */

        td {
          flex: 1;
          padding: 0.5rem;
          color: #555; /* Define uma cor para o texto das células */

          &.positive {
            color: green;
          }

          &.negative {
            color: red;
          }
        }
      }

      tr:last-child {
        margin-bottom: 0; /* Remove o espaço extra após a última linha */
      }
    }
  }
`;
