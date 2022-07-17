import React from 'react';
import Block from "./blocks/Block";
//import './BlockList.css';
import { v4 as uuidv4 } from 'uuid';

function BlockList({ listOfBlocks, globalCurrentState }) {

    const blockTemplate = listOfBlocks.map(({ id, prevHash, nonce, hash, currentState }) => {
        const classProperty = globalCurrentState === currentState ? 'carousel-item active' : 'carousel-item';
        return <Block className={classProperty} key={uuidv4()} id={id} prevHash={prevHash} currentState={currentState} nonce={nonce} hash={hash} />
    });
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {blockTemplate}
            </div>
        </div >

    )
}

export default BlockList;