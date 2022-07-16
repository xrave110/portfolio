import Skill from "./elements/Skill";
import "./Skills.css";
import React from 'react';

const Skills = ({ currentState }) => {
    const techs = [{
        'skill': 'C',
        'exp': 95,
        'pow': ['previous job']
    },
    {
        'skill': 'Python',
        'exp': 90,
        'pow': ['previous job', 'github projects']
    },
    {
        'skill': 'Solidity',
        'exp': 75,
        'pow': ['github projects', 'cert']
    },
    {
        'skill': 'Javascript',
        'exp': 75,
        'pow': ['github projects', 'cert']
    },
    ]
    const toolsets = [{
        'skill': 'Pytest',
        'exp': 90,
        'pow': ['previous job', 'github projects']
    },
    {
        'skill': 'Brownie',
        'exp': 85,
        'pow': ['github projects']
    },
    {
        'skill': 'Web3',
        'exp': 85,
        'pow': ['github projects', 'cert']
    },
    {
        'skill': 'Truffle',
        'exp': 75,
        'pow': ['github projects', 'cert']
    },
    {
        'skill': 'Hardhat',
        'exp': 75,
        'pow': ['github projects']
    },
    {
        'skill': 'React',
        'exp': 75,
        'pow': ['github projects', 'this website', 'cert']
    },
    {
        'skill': 'Git',
        'exp': 75,
        'pow': ['github repo']
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
            'skill': 'English',
            'exp': 80,
            'pow': ['this website']
        },
        {
            'skill': 'ISTQB',
            'exp': 80,
            'pow': ['previous job', 'cert']
        },
        {
            'skill': 'Ethereum blockchain',
            'exp': 80,
            'pow': ['cert']
        },
        {
            'skill': 'NFTs',
            'exp': 70,
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
            return <Skill skill={skill} exp={exp} pow={pow} color={colors[idx++]} />
        })
        //console.log(listOfSkills);
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