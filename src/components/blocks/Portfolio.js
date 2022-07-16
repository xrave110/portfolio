import Project from "./elements/Project";
import Cert from "./elements/Cert";
import "./Portfolio.css"

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
            'title': 'Lottery',
            'desc': 'Lottery with usage of chainlink with integration and unit tests',
            'link': 'https://github.com/xrave110/Lottery'
        },
        {
            'title': 'Multi Sig Vault',
            'desc': 'Vault contract with multiple signatures with full unit tests',
            'link': 'https://github.com/xrave110/MultiSigVault'
        },
        {
            'title': 'Knight Game',
            'desc': 'Game with NFTs',
            'link': 'https://github.com/xrave110/KnightGame'
        },
    ];
    const listOfCerts = [
        {
            'title': 'ISTQB',
            'desc': '',
            'link': ''
        },
        {
            'title': 'Javascript',
            'desc': 'Javascript programming for blockchain developers',
            'link': ''
        },
        {
            'title': 'Dapp programming',
            'desc': 'Ethereum dapp programming',
            'link': ''
        },
        {
            'title': 'Chainlink 101',
            'desc': 'Chainlink projects with oracles, verifiable randomness and oracle tests',
            'link': ''
        },
        {
            'title': 'DeFi 201',
            'desc': 'Advanced feaures of DeFi financial stack',
            'link': ''
        },
        {
            'title': 'Game Programming',
            'desc': 'Ethereum game programming using NFTs in ERC721 and ERC1155 standard',
            'link': ''
        },
        {
            'title': 'Smart Contracts',
            'desc': 'Smart contract programming using OpenZeppelin and Truffle unit tests',
            'link': ''
        },
        {
            'title': 'Smart Contract Security',
            'desc': 'Solidity best practises, upgradable contracts, proxies, pausable contracts',
            'link': ''
        },
    ];
    const projColors = ['bg-dark'];
    const certColors = ['bg-secondary', 'bg-dark'];
    function createProjects() {
        let idx = 0;
        let ret = listOfProjects.map(({ title, desc, link }) => {
            idx = idx % projColors.length;
            return <Project link={link} title={title} desc={desc} color={projColors[idx++]} />
        })
        console.log(ret);
        return ret;
    }
    function createCerts() {
        let idx = 0;
        let ret = listOfCerts.map(({ title, desc, link }) => {
            idx = idx % certColors.length;
            return <Cert link={link} title={title} desc={desc} color={certColors[idx++]} />
        })
        console.log(ret);
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