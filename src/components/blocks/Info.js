import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./Info.css";

const Info = ({ currentState }) => {
    return (
        <div className="info-container">
            <h3>{currentState}</h3>
            {/* <img src={logo} alt="" style={{ width: "98px", height: "98px" }} /> */}
            <svg className="bd-placeholder-img rounded-circle img-container" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em"></text></svg>
            <div className="about-container">
                <h6 className='badge bg-info rounded-pill'>Automotive experience</h6>
                <p className="info-paragraph">My name is Kamil and I am Software Engineer with 5 years experience in automotive industry.
                    During my career I have managed to develop and test multiple Software Components using C and Python. I was strongly involved in unit and integration
                    testing for CAN messages. At the end of my automotive journey I have become Software Integrator. It allows me to focus more on integration topics (integrations tests, scripting, builds).
                </p>
                <h6 className='badge bg-success rounded-pill'>Blockchain experience</h6>
                <p className="info-paragraph">Since 2019 I have got interested in blockchain technology, especially in DeFi.
                    I have started using DeFi protocols and was amazed how it works without any intermediares - just a math and peers.
                    I have been taking part in Moralis academy for a year and then continue my blockchain adventure with my own projects.
                    Besides <a href='https://academy.moralis.io/' target="_blank" rel="noreferrer">Moralis Academy</a> my best places to learn were i.a:
                    <ul>
                        <li><a href='https://www.youtube.com/c/PatrickCollins' target="_blank" rel="noreferrer">PatrickColins</a></li>
                        <li><a href='https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA' target="_blank" rel="noreferrer">Smart Contract Programmer</a></li>
                        <li><a href='https://github.com/curvefi/brownie-tutorial' target="_blank" rel="noreferrer">Curve Finance - brownie tutorial</a></li>
                        <li><a href='https://www.youtube.com/c/Finematics' target="_blank" rel="noreferrer">Finematics</a></li>
                        <li><a href='https://www.learnweb3.io/' target="_blank" rel="noreferrer">LearnWeb3Dao</a></li>
                        <li><a href='https://cryptozombies.io/' target="_blank" rel="noreferrer">CryptoZombies</a></li>
                    </ul>
                </p>

                <h6 className='badge bg-primary rounded-pill'>Hobbies</h6>
                <p className="info-paragraph">
                    My hobbies differs depending on time but there are some activities which remain forever.
                    Such activities for me are sking, biking and walking through mountains or forests.
                    Besides that I am keen on financial and of course crypto markets.
                </p>

            </div>
        </div>
    );
}

export default Info;
