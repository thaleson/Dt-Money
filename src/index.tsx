import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer,Model } from 'miragejs';
import {App} from './App';


createServer({

  models:{
    transaction:Model, 

  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title:'Free lance de website ',
          type:'deposit',
          category:'Dev',
          amount:6000.,
          createdAt:new Date('2024-03-10 10:00:00'),
        },

        {
          id:2,
          title:'Aluguel ',
          type:'withdraw',
          category:'casa',
          amount:1000.,
          createdAt:new Date('2024-03-12 11:00:00'),
        }
      ],
    })
  },
  routes() {
    this.namespace='api';

    this.get('/transactions' ,() =>{
      return this.schema.all('transaction');
    })

    this.post('/transactions',(schema,request) =>{


      const data = JSON.parse(request.requestBody);

      return schema.create('transaction',data);
    })
  },


})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

