import Skill from "./elements/Skill";
import "./Skills.css";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Skills = ({ currentState }) => {
    const techs = [{
        'skill': 'C',
        'exp': 90,
        'pow': ['job']
    },
    {
        'skill': 'Python',
        'exp': 85,
        'pow': ['job', 'github projects']
    },
    {
        'skill': 'Solidity',
        'exp': 85,
        'pow': ['github projects', 'cert']
    },
    {
        'skill': 'Javascript',
        'exp': 70,
        'pow': ['github projects', 'cert']
    },
    ]
    const toolsets = [{
        'skill': 'Pytest',
        'exp': 80,
        'pow': ['job', 'github projects']
    },

    {
        'skill': 'Brownie',
        'exp': 80,
        'pow': ['github projects']
    },
    {
        'skill': 'Hardhat/Ethers/Chai',
        'exp': 80,
        'pow': ['github projects']
    },
    {
        'skill': 'Web3',
        'exp': 70,
        'pow': ['github projects', 'cert']
    },
    {
        'skill': 'OpenZeppelin',
        'exp': 70,
        'pow': ['github projects', 'cert']
    },
    {
        'skill': 'Git',
        'exp': 70,
        'pow': ['job', 'github repo']
    },
    {
        'skill': 'Truffle',
        'exp': 65,
        'pow': ['github projects', 'cert']
    },
    {
        'skill': 'React',
        'exp': 65,
        'pow': ['github projects', 'this website']
    },


    ]
    const others = [
        {
            'skill': 'Polish',
            'exp': 100,
            'pow': ['native']
        },
        {
            'skill': 'DeFi',
            'exp': 85,
            'pow': ['github projects', 'cert']
        },
        {
            'skill': 'Chainlink utils',
            'exp': 85,
            'pow': ['github projects', 'cert']
        },
        {
            'skill': 'English',
            'exp': 80,
            'pow': ['this website']
        },
        {
            'skill': 'ISTQB',
            'exp': 80,
            'pow': ['job', 'cert']
        },
        {
            'skill': 'Ethereum blockchain',
            'exp': 80,
            'pow': ['cert']
        },
        {
            'skill': 'Cryptography',
            'exp': 80,
            'pow': ['job']
        },
        {
            'skill': 'NFTs',
            'exp': 75,
            'pow': ['github projects', 'cert']
        },
    ]
    function createInfo(skills) {
        const colors = ['',
            'bg-success',
            'bg-info',
            'bg-warning',
            'bg-danger']
        let idx = 0;
        let listOfSkills = skills.map(({ skill, exp, pow }) => {
            idx %= colors.length;
            return <Skill key={uuidv4()} skill={skill} exp={exp} pow={pow} color={colors[idx++]} />
        })
        return listOfSkills;
    }
    return (
        <div style={{ width: '100%' }}>
            <h3>{currentState}</h3>
            <div className="section-container">
                <h6 className="my-headers slide">Technologies</h6>
                <h6 className="my-headers proof">PoW</h6>
            </div>
            {createInfo(techs)}
            <div className="section-container">
                <h6 className="my-headers slide">Toolsets/Frameworks</h6>
                <h6 className="my-headers proof">PoW</h6>
            </div>

            {createInfo(toolsets)}
            <div className="section-container">
                <h6 className="my-headers slide">Other skills</h6>
                <h6 className="my-headers proof">PoW</h6>
            </div>
            {createInfo(others)}
        </div >

    );
}

export default Skills;