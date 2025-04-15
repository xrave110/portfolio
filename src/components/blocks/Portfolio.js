import Project from "./elements/Project";
import Cert from "./elements/Cert";
import "./Portfolio.css"
import Istqb from '../../certs/ISTQB.pdf'
import Javascript from '../../certs/Javascript.pdf';
import DappProgramming from '../../certs/DappProgramming.pdf';
import Defi from '../../certs/Defi.pdf';
import ToolboxAi from '../../certs/ToolboxAi.pdf';
import SmartContractProgramming from '../../certs/SmartContractProgramming.pdf';
import SmartContractSecurity from '../../certs/SmartContractSecurity.pdf';
import ReactWebDevelopment from '../../certs/ReactWebDevelopment.pdf';

import { v4 as uuidv4 } from 'uuid';

const Projects = ({ currentState }) => {
    const listOfProjects = [
        {
            'title': 'Options Tokens',
            'desc': 'Modular token enabling users to exercise whitelisted contracts for discounted assets. Enhanced oracle support and compounding strategy integration.',
            'link': 'https://github.com/Cod3x-Labs/Options-Token',
            'live': 'https://explorer.mode.network/address/0x3B6eA0fA8A487c90007ce120a83920fd52b06f6D?tab=contract'
        },
        {
            'title': 'Cod3x Lend',
            'desc': 'Innovative Lending Protocol with Isolated Liquidity and Rehypothecation Features.',
            'link': 'https://github.com/Cod3x-Labs/Cod3x-Lend',
        },
        {
            'title': 'Make-Fun',
            'desc': 'Token Launchpad using a new Liquidity primitive based on UniV3 concentrated liquidity.',
            'link': 'https://github.com/Cod3x-Labs/Make-Fun',
            'live': 'https://make.fun'
        },
        {
            'title': 'Liquidity Wars',
            'desc': 'Autonomous Decentralized No-Loss Strategy Game where players fight each other for LP rewards.',
            'link': 'https://github.com/Liquidity-Wars',
        },
        {
            'title': 'Flashloan',
            'desc': 'Flashloan/DeFi related content: swaps, arbitrages, liquidity providing, lending, borrowing',
            'link': 'https://github.com/xrave110/flashloan'
        },
        {
            'title': 'Concentrated liquidity provider',
            'desc': 'Provide simple exposure on concentrated liquidity position with automatic compounding system',
            'link': 'https://github.com/0xBcamp/Concentrated-Liquidity-Compounder'
        },
        {
            'title': 'Smart Vault',
            'desc': 'Multi Signature Vault with rebalancing and compounding system',
            'link': 'https://github.com/0xBcamp/March-2023-Sierra'
        },
        {
            'title': 'User Dashboard',
            'desc': 'User dashboard created with moralis SDK',
            'link': 'https://github.com/xrave110/UserDashboard'
        },

    ];
    const listOfCerts = [
        {
            'title': 'ISTQB foundation level',
            'desc': 'Testing knowledge that can be put to practical use with terms and concepts that are used worldwide in the testing domain.',
            'link': Istqb
        },
        {
            'title': 'AI toolbox',
            'desc': 'Practical review of AI tools .',
            'link': ToolboxAi
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
            'title': 'DeFi 201',
            'desc': 'Advanced features of DeFi financial stack',
            'link': Defi
        },
        {
            'title': 'Smart Contracts',
            'desc': 'Smart contract programming using OpenZeppelin and Truffle unit tests',
            'link': SmartContractProgramming
        },
        {
            'title': 'Smart Contract Security',
            'desc': 'Solidity best practices, upgradable contracts, proxies, pausable contracts',
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
        let ret = listOfProjects.map(({ title, desc, link, live }) => {
            idx = idx % projColors.length;
            return <Project key={uuidv4()} link={link} title={title} desc={desc} color={projColors[idx++]} web={live} />
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
            <h6>Certificates</h6>
            <div className="certs-container">
                {createCerts()}
            </div>
        </div>
    )
}

export default Projects;