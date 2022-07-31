import Project from "./elements/Project";
import Cert from "./elements/Cert";
import "./Portfolio.css"
import Istqb from '../../certs/ISTQB.pdf'
import Javascript from '../../certs/Javascript.pdf';
import DappProgramming from '../../certs/DappProgramming.pdf';
import Chainlink101 from '../../certs/Chainlink101.pdf';
import Defi from '../../certs/Defi.pdf';
import GameProgramming from '../../certs/GameProgramming.pdf';
import SmartContractProgramming from '../../certs/SmartContractProgramming.pdf';
import SmartContractSecurity from '../../certs/SmartContractSecurity.pdf';
import ReactWebDevelopment from '../../certs/ReactWebDevelopment.pdf';

import { v4 as uuidv4 } from 'uuid';

const Projects = ({ currentState }) => {
    const listOfProjects = [
        {
            'title': 'Flashloan',
            'desc': 'Flashloan/DeFi related content: swaps, arbitrages, liquidity providing, lending, borrowing',
            'link': 'https://github.com/xrave110/flashloan'
        },
        {
            'title': 'User Dashboard',
            'desc': 'User dashboard created with moralis SDK',
            'link': 'https://github.com/xrave110/UserDashboard'
        },
        {
            'title': 'DeFi brownie',
            'desc': 'Full stack defi project with brownie',
            'link': 'https://github.com/xrave110/defi_brownie'
        },
        {
            'title': 'Multi Sig Vault',
            'desc': 'Vault contract with multiple signatures with full unit tests',
            'link': 'https://github.com/xrave110/MultiSigVault'
        },
        {
            'title': 'DAO',
            'desc': 'DAO for simple NFT purchases',
            'link': 'https://github.com/xrave110/DAO'
        },
        {
            'title': 'Lottery',
            'desc': 'Lottery with usage of chainlink with integration and unit tests',
            'link': 'https://github.com/xrave110/Lottery'
        },
        {
            'title': 'Knight Game',
            'desc': 'Game with NFTs',
            'link': 'https://github.com/xrave110/KnightGame'
        },
    ];
    const listOfCerts = [
        {
            'title': 'ISTQB foundation level',
            'desc': 'Testing knowledge that can be put to practical use with terminology and concepts that are used worldwide in the testing domain.',
            'link': Istqb
        },
        {
            'title': 'Javascript',
            'desc': 'Javascript programming for blockchain developers',
            'link': Javascript
        },
        {
            'title': 'Dapp programming',
            'desc': 'Ethereum dapp programming',
            'link': DappProgramming
        },
        {
            'title': 'Chainlink 101',
            'desc': 'Chainlink projects with oracles, verifiable randomness and oracle tests',
            'link': Chainlink101
        },
        {
            'title': 'DeFi 201',
            'desc': 'Advanced feaures of DeFi financial stack',
            'link': Defi
        },
        {
            'title': 'Game Programming',
            'desc': 'Ethereum game programming using NFTs in ERC721 and ERC1155 standard',
            'link': GameProgramming
        },
        {
            'title': 'Smart Contracts',
            'desc': 'Smart contract programming using OpenZeppelin and Truffle unit tests',
            'link': SmartContractProgramming
        },
        {
            'title': 'Smart Contract Security',
            'desc': 'Solidity best practises, upgradable contracts, proxies, pausable contracts',
            'link': SmartContractSecurity
        },
        {
            'title': 'React Web Development',
            'desc': 'Creating apps using function and class based components and react hooks',
            'link': ReactWebDevelopment
        },
    ];
    const projColors = ['bg-dark'];
    const certColors = ['bg-secondary', 'bg-dark'];
    function createProjects() {
        let idx = 0;
        let ret = listOfProjects.map(({ title, desc, link }) => {
            idx = idx % projColors.length;
            return <Project key={uuidv4()} link={link} title={title} desc={desc} color={projColors[idx++]} />
        })
        return ret;
    }
    function createCerts() {
        let idx = 0;
        let ret = listOfCerts.map(({ title, desc, link }) => {
            idx = idx % certColors.length;
            return <Cert key={uuidv4()} link={link} title={title} desc={desc} color={certColors[idx++]} />
        })
        return ret;
    }
    return (
        <div>
            <h3>{currentState}</h3>
            <h6>Projects</h6>
            <div className="projects-container">
                {createProjects()}
            </div>
            <h6>Certificats</h6>
            <div className="certs-container">
                {createCerts()}
            </div>
        </div>
    )
}

export default Projects;