import React, { Component } from 'react';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';

class TransactionPool extends Component {
    state = { transactionPoolMap: {} };

    fetchTransactionPoolMap = async () => {
        const response = await fetch('http://localhost:3000/api/transaction-pool-map');
        this.setState({ transactionPoolMap: await response.json() })    
    };

    componentDidMount() {
        this.fetchTransactionPoolMap();
    }

    renderTransactionPool() {
        return Object.values(this.state.transactionPoolMap).map(transaction => {
            return (
                <div key={transaction.id}>
                    <hr />
                    <Transaction transaction={transaction} />
                </div>
            );
        });
    }

    render() {
        return (
            <div className='TransactionPool'>
                <div><Link to='/'>Home</Link></div>
                <h3>Transaction Pool</h3>
                {this.renderTransactionPool()}
            </div>
        );
    }
}

export default TransactionPool;