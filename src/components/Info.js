import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./Info.css";

const Info = ({ currentState }) => {
    return (
        <div className="info-container col-lg-4">
            <h2>{currentState}</h2>
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
            <p>My name is Kamil Palenik and I am software engineer with 5 years experience in automotive industry.</p>
            <p>Since 2019 I have got interested in blockchain technology especially in DeFi.</p>
            <p><a className="btn btn-secondary" href="#"></a></p>
        </div>
    );
}

export default Info;
