import React from 'react';
import Block from ".block/Block";
//import './BlockList.css';
import { v4 as uuidv4 } from 'uuid';

function BlockList({ listOfBlocks }) {
    const blockTemplate = listOfBlocks.map(({ id, prevHash, nonce, hash, currentState }) => {
        return <Block id={id} prevHash={prevHash} currentState={currentState} nonce={nonce} hash={hash} />
    });
    return (
        <div> {blockTemplate} </div>
    )
}

export default BlockList;