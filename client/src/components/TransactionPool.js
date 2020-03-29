import React, { Component } from 'react';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import history from '../history';

const POOL_INERVAL_MS = 10000;

class TransactionPool extends Component {
    state = { transactionPoolMap: {} };

    fetchTransactionPoolMap = async () => {
        const response = await fetch(`${document.location.origin}/api/transaction-pool-map`);
        this.setState({ transactionPoolMap: await response.json() })    
    };

    fetchMineTransactions = async () => {
        const response = await fetch(`${document.location.origin}/api/mine-transaction`);
        if (response.status === 200) {
            alert('success');
            history.push('/blocks');
        } else {
            alert('The mine-transaction block request did not complete');
        }
    }

    componentDidMount() {
        this.fetchTransactionPoolMap();

        this.fetchPoolMapInterval = setInterval(
            () => this.fetchTransactionPoolMap(), POOL_INERVAL_MS
        );
    }

    componentWillUnmount() {
        clearInterval(this.fetchPoolMapInterval);
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
                <hr/>
                <Button
                    bsStyle="danger"
                    onClick={this.fetchMineTransactions}
                >
                    Mine the Transactions
                </Button>
            </div>
        );
    }
}

export default TransactionPool;