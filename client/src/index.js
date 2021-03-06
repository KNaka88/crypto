import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import App from './components/App';
import Blocks from './components/Blocks';
import ConductTransaction from './components/CounductTransaction';
import './index.css';
import TransactionPool from './components/TransactionPool';

render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' component={App} />
            <Route path='/blocks' component={Blocks} />>
            <Route path='/conduct-transaction' component={ConductTransaction}></Route>
            <Route path='/transaction-pool' component={TransactionPool}></Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);