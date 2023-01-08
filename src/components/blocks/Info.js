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
                <p className="info-paragraph">My name is Kamil and I am a Software Engineer with 5 years experience in automotive industry.
                    During my career I have managed to develop and test multiple Software Components using C and Python. I was strongly involved in unit and integration
                    testing for CAN messages. I have also some integration experience like integration tests, scripting and handling builds.
                </p>
                <h6 className='badge bg-success rounded-pill'>Blockchain experience</h6>
                <p className="info-paragraph">In 2019 I got interested in blockchain technology, especially in DeFi and
                    I have been using DeFi protocols ever since. I was absolutely amazed how it works without any intermediares - just maths and peers.
                    I participated in one year Moralis academy and then continued my blockchain adventure with my own projects.
                    Besides <a href='https://academy.moralis.io/' target="_blank" rel="noreferrer" className='a-color'>Moralis Academy</a> my best places to learn were i.a:
                    <ul>
                        <li><a href='https://www.youtube.com/c/PatrickCollins' target="_blank" rel="noreferrer" className='a-color'>PatrickColins</a></li>
                        <li><a href='https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA' target="_blank" rel="noreferrer" className='a-color'>Smart Contract Programmer</a></li>
                        <li><a href='https://github.com/curvefi/brownie-tutorial' target="_blank" rel="noreferrer" className='a-color'>Curve Finance - brownie tutorial</a></li>
                        <li><a href='https://www.youtube.com/c/Finematics' target="_blank" rel="noreferrer" className='a-color'>Finematics</a></li>
                        <li><a href='https://www.learnweb3.io/' target="_blank" rel="noreferrer" className='a-color'>LearnWeb3Dao</a></li>
                        <li><a href='https://cryptozombies.io/' target="_blank" rel="noreferrer" className='a-color'>CryptoZombies</a></li>
                    </ul>
                </p>

                <h6 className='badge bg-primary rounded-pill'>Hobbies</h6>
                <p className="info-paragraph">
                    My hobbies have been changing a lot during lifetime however there are some activities which I have always taking pleasure.
                    By all means such activities for me are sking, biking and hiking.
                    Besides that I am keen on financial and crypto markets.
                </p>

            </div>
        </div>
    );
}

export default Info;
