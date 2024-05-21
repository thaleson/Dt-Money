import  { createContext, useContext, useState, ReactNode } from 'react';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  resetTransactions: () => void;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(transactionInput: TransactionInput) {
    const newTransaction = {
      ...transactionInput,
      id: Math.random(),
      createdAt: new Date(),
    };

    setTransactions([...transactions, newTransaction]);
  }

  function resetTransactions() {
    setTransactions([]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction, resetTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
