import React, { Component } from 'react';

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
            <div>
                <div>Welcome to the blockchain...</div>
                <div>Address: {address}</div>
                <div>Balance: {balance}</div>
            </div>
        );
    }
}

export default App