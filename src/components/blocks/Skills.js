import Skill from "./elements/Skill";
import "./Skills.css";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Skills = ({ currentState }) => {
const techs = [
    {
        'skill': 'Solidity',
        'exp': 90
    },
    {
        'skill': 'C',
        'exp': 85
    },
    {
        'skill': 'Python',
        'exp': 75
    },

    {
        'skill': 'Javascript',
        'exp': 65
    },
    ]
    const toolsets = [
        {
            'skill': 'Foundry',
            'exp': 90
        },
        {
            'skill': 'Git/Github',
            'exp': 80
        },
        {
            'skill': 'OpenZeppelin, Solady',
            'exp': 80
        },
        {
            'skill': 'Hardhat/Apeworx',
            'exp': 75
        },
        {
            'skill': 'Web3',
            'exp': 70
        },
        {
            "skill": 'Tenderly',
            'exp': 70
        },
        {
            'skill': 'React',
            'exp': 60
        },
    ]
    const others = [
        {
            'skill': 'Polish',
            'exp': 100
        },
        {
            'skill': 'DeFi (aave, uniswap, vaults, etc.)',
            'exp': 90
        },
        {
            'skill': 'Oracles (TWAP, Chainlink)',
            'exp': 85
        },
        {
            'skill': 'English',
            'exp': 80
        },
        {
            'skill': 'Advanced tests, ISTQB',
            'exp': 80
        },
        {
            'skill': 'EVM',
            'exp': 80

        },
        {
            'skill': 'Cryptography',
            'exp': 70
        },
        {
            'skill': 'AI agents, prompt engineering',
            'exp': 65
        },
        
    ]
    function createInfo(skills) {
        const colors = ['',
            'bg-success',
            'bg-info',
            'bg-warning',
            'bg-danger']
        let idx = 0;
        let listOfSkills = skills.map(({ skill, exp }) => {
            idx %= colors.length;
            return <Skill key={uuidv4()} skill={skill} exp={exp} color={colors[idx++]} />
        })
        return listOfSkills;
    }
    return (
        <div style={{ width: '100%' }}>
            <h3>{currentState}</h3>
            <div className="section-container">
                <h6 className="my-headers slide">Technologies</h6>
            </div>
            {createInfo(techs)}
            <div className="section-container">
                <h6 className="my-headers slide">Toolsets/Frameworks</h6>
            </div>

            {createInfo(toolsets)}
            <div className="section-container">
                <h6 className="my-headers slide">Other skills</h6>
            </div>
            {createInfo(others)}
        </div >

    );
}

export default Skills;