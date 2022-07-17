import React from 'react';
import "./Skill.css";

const Skill = ({ skill, exp, pow, color }) => {
    const classProperties = "progress-bar progress-bar-striped progress-bar-animated " + color;
    const badgeColorMapping = {
        "previous job": 'bg-primary',
        "github projects": 'bg-success',
        "cert": 'bg-info',
        "this website": 'bg-warning',
        "native": 'bg-danger',
        "github repo": 'bg-success',
    }
    exp = exp.toString()
    function createBadges() {
        let ret = pow.map((el) => {
            const badgeClassProperties = `my-badge badge ${badgeColorMapping[el]} rounded-pill`;
            return <span className={badgeClassProperties}>{el}</span>
        })
        return ret;
    }
    return (
        <div className='skill-container'>
            <div className="progress my-progress">
                <div className={classProperties} role="progressbar" aria-valuenow={exp} aria-valuemin="0" aria-valuemax="100" style={{ width: `${exp}%` }}>{skill}</div>

            </div >
            <div className='my-badges'>
                {createBadges()}
            </div>

        </div>
    );
}

export default Skill;