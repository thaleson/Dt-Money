
import { useTransactions } from "../../hooks/useTransactionsContext";

import incomeimg from '../../assets/entrada.svg'
import outcomeimg from '../../assets/saida.svg'
import totaimg from '../../assets/cifrao.svg'
import { Container } from "./styles";

export function Summary() {

  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transactions) => {


    if (transactions.type === 'deposit') {
      acc.deposits += transactions.amount;
      acc.total += transactions.amount;

    } else {

      acc.withdraws += transactions.amount;
      acc.total -= transactions.amount;
    }

    return acc;


  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (

    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeimg} alt="Entrada" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-Br',
            { style: 'currency', currency: 'BRL' }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeimg} alt="Saidas" />
        </header>
        <strong>-
          {new Intl.NumberFormat('pt-Br',
            { style: 'currency', currency: 'BRL' }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highligh-background">
        <header>
          <p>Total</p>
          <img src={totaimg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-Br',
            { style: 'currency', currency: 'BRL' }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );

}