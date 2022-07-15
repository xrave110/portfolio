import './App.css';
//import BlockList from './components/BlockList';
import Block from './components/Block';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Info from './components/Info';

function App() {
  const states = [
    "Who Am I?",
    "Skills",
    "Portfolio",
    "Contact"
  ];

  let [listOfBlocks, setListOfBlocks] = useState([]);
  const [currentState, setCurrentState] = useState("Who Am I?");
  const [test, setTest] = useState(10);
  const listOfComponents = [
    <Info currentState={currentState} />,
    currentState,
    currentState,
    currentState,
  ]


  async function calcAllNonces() {
    for (let i = 0; i < listOfBlocks.length; i++) {
      await calcNonce(listOfBlocks[i]);
    }
  }

  async function calcNonce(block) {
    block.currentState = states[+block.id];
    while ((block.hash[0] !== '0' || block.hash[1] !== '0') &&
      (block.nonce < 1000)) {
      block.nonce++;
      const message = block.id + block.prevHash + block.id + block.nonce.toString() + block.hash;
      // encode as UTF-8
      const msgBuffer = new TextEncoder().encode(message);
      // hash the message
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

      // convert ArrayBuffer to Array
      const hashArray = Array.from(new Uint8Array(hashBuffer));

      // convert bytes to hex string
      block.hash = await hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      // console.log(`Hash: ${block.hash}`);
      // console.log(`Hash: ${block.hash[0]}`);
      // console.log(`Hash: ${block.hash[1]}`);
    }
    if (+block.id !== 0) {
      block.prevHash = listOfBlocks[+block.id - 1].hash;
    }
    console.log(`id: ${block.id} hash: ${block.hash}`);
  }
  const createBlockchain = () => {
    let block = <Block id='' prevHash='' currentState='' nonce='' hash='' />;
    for (let idx = 0; idx < listOfBlocks.length; idx++) {
      if (currentState === listOfBlocks[idx].currentState) {
        block = <Block id={listOfBlocks[idx].id} prevHash={listOfBlocks[idx].prevHash} component={listOfComponents[idx]} nonce={listOfBlocks[idx].nonce} hash={listOfBlocks[idx].hash} />;
      }
    }
    console.log(`block.props:`);
    console.log(block.props);
    return block;
  }

  useEffect(() => {
    if (states.length !== listOfBlocks.length) {
      listOfBlocks = states.map((state, id) => ({
        id: id.toString(),
        currentState: state,
        prevHash: '0',
        nonce: 0,
        hash: '',
      }));
      console.log(listOfBlocks);
      calcAllNonces()
        .then(() => setListOfBlocks(listOfBlocks))
    }
  }, [currentState]);

  console.log(listOfBlocks)
  return (
    <div className="App">
      <Header setCurrentState={setCurrentState} />
      <div>{createBlockchain()}</div>
      {/* <BlockList listOfBlocks={listOfBlocks} currentState={currentState} /> */}
    </div>
  );
}

export default App;
