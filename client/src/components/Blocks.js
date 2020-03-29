import React, { Component } from 'react';
import Block from './Block';

class Blocks extends Component {
    state = { blocks: [] };

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/api/blocks');
        const json = await response.json();
        this.setState({ blocks: json });
    }
    
    renderBlocks() {
        return this.state.blocks.map((block) => {
            return (
               <Block key={block.hash} block={block}/>
            )
        });
    }

    render() {
        return (
            <div>
                <h3>Blocks</h3>
                {this.renderBlocks()}
            </div>
        );
    }
}

export default Blocks;