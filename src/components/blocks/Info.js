import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./Info.css";
// import avatar from "../../imgs/avatar1.jpg";

const Info = ({ currentState }) => {
    return (
        <div className="info-container">
            <h3>{currentState}</h3>
            {/* <img src={avatar} className="bd-placeholder-img rounded-circle img-container" width="170" height="192" /> */}
            <div className="about-container">
                <h6 className='badge bg-info rounded-pill'>Automotive experience</h6>
                <p className="info-paragraph">Experienced Software Engineer with over 6 years in embedded systems for the automotive industry and over 3 years in blockchain technology and cybersecurity. 
                    Specialized in DeFi protocols and smart contract development. Proficient in utilization AI tools with proper prompt engineering.
                    Strongly involved in unit and integration testing in automotive diagnostics components. Contributed to the development of user authentication systems, including PKI infrastructure, for vehicle charging stations.
                </p>
                <h6 className='badge bg-success rounded-pill'>Blockchain experience</h6>
                <p className="info-paragraph">In DeFi since 2019 as a user. Smart contract programmer since 2022.
                    Participant of one year <a href='https://academy.moralis.io/' target="_blank" rel="noreferrer" className='a-color'>Moralis academy</a>. 
                    <b>Winner in blockchain hackathons (Chainlink Fall 2022, Moralis Hackathon 2022):</b>
                    <ul>
                        
                        <li><a href='https://devpost.com/software/liquidity-wars' target="_blank" rel="noreferrer" className='a-color'>Chainlink Fall 2022 Hackathon</a> - Idea creator, smart contract designer, developer and tester for <b>Liquidity Wars</b> project</li>
                        <li><a href='https://moralis.io/filecoin-hackathon/winners/' target="_blank" rel="noreferrer" className='a-color'>1,2, Web3 Hackathon</a> - Smart contract designer, developer and tester for <b>OWNly</b></li>
                    </ul>
                    <b>One of the finalist of Bootcamp Academy and mentor in next editions:</b>
                    <ul>
                        <li><a href='https://bcamp.dev/june-2023-cohort' target="_blank" rel="noreferrer" className='a-color'>Bcamp march 2023 cohort</a> </li>
                        <li><a href='https://bcamp.dev/byte-masons-apprenticeship' target="_blank" rel="noreferrer" className='a-color'>Byte Masons Apprenticeship</a></li>
                    </ul>
                </p>

                <h6 className='badge bg-primary rounded-pill'>Hobbies</h6>
                <p className="info-paragraph">
                    My hobbies have been changing a lot during lifetime however there are some activities which I have always taking pleasure.
                    By all means such activities for me are skiing, biking and hiking.
                    Besides that I am keen on financial and crypto markets.
                </p>

                <h6 className='badge bg-secondary rounded-pill'>Recommended resources</h6>
                <p className="info-paragraph">
                    Best places to learn:
                    <ul>
                        <li><a href='https://updraft.cyfrin.io/' target="_blank" rel="noreferrer" className='a-color'>Updraft</a></li>
                        <li><a href='https://bcamp.dev/' target="_blank" rel="noreferrer" className='a-color'>Bcamp</a></li>
                        <li><a href='https://www.youtube.com/c/PatrickCollins' target="_blank" rel="noreferrer" className='a-color'>PatrickColins</a></li>
                        <li><a href='https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA' target="_blank" rel="noreferrer" className='a-color'>Smart Contract Programmer</a></li>
                        <li><a href='https://ethernaut.openzeppelin.com/' target="_blank" rel="noreferrer" className='a-color'>Ethernaut</a></li>
                        <li><a href='https://github.com/curvefi/brownie-tutorial' target="_blank" rel="noreferrer" className='a-color'>Curve Finance - brownie tutorial</a></li>
                        <li><a href='https://www.youtube.com/c/Finematics' target="_blank" rel="noreferrer" className='a-color'>Finematics</a></li>
                        <li><a href='https://www.learnweb3.io/' target="_blank" rel="noreferrer" className='a-color'>LearnWeb3Dao</a></li>
                        <li><a href='https://cryptozombies.io/' target="_blank" rel="noreferrer" className='a-color'>CryptoZombies</a></li>
                    </ul>
                </p>

            </div>
        </div>
    );
}

export default Info;
