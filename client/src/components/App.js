import React, { Component } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

class App extends Component {
    state = { walletInfo: { } };

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/api/wallet-info');
        const json = await response.json();
        this.setState({ walletInfo: json});
    }
    render() {
        const { address, balance } = this.state.walletInfo;
        return (
            <div className="App">
                <img className='logo' src={logo}></img>
                <br/>
                <div>Welcome to the blockchain...</div>
                <br/>
                <div><Link to="/blocks">Blocks</Link></div>
                <div className="WalletInfo">
                    <div>Address: {address}</div>
                    <div>Balance: {balance}</div>
                </div>
            </div>
        );
    }
}

export default App