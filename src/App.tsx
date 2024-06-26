import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';

import { TransactionsTable } from "./components/TransactionsTable";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactionsContext";




Modal.setAppElement('#root');




export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);




  function handleOpenNewTransactionModal() {

    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {

    setIsNewTransactionModalOpen(false);

  }






  return (

    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <TransactionsTable />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>


  );
}

