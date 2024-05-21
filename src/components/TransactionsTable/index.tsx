import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactionsContext";






export function TransactionsTable() {
    const { transactions } = useTransactions();


    return (
        <Container>
            
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transactions => (

                        <tr key={transactions.id}>
                            <td>{transactions.title}</td>
                            <td className={transactions.type === 'deposit' ? 'positive' : 'negative'}>
                                {new Intl.NumberFormat('pt-Br',
                                    {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transactions.amount)}


                            </td>
                            <td>{transactions.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(transactions.createdAt))}
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </Container>
    );
}
