import React from 'react';
import "./Skill.css";

const Skill = ({ skill, exp, color }) => {
    const classProperties = "progress-bar progress-bar-striped progress-bar-animated " + color;
    return (
        <div className='skill-container'>
            <div className="progress my-progress">
                <div className={classProperties} role="progressbar" aria-valuenow={exp} aria-valuemin="0" aria-valuemax="100" style={{ width: `${exp}%` }}>{skill}</div>

            </div >

        </div>
    );
}

export default Skill;