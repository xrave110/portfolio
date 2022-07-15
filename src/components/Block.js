import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import './Block.css';

const Block = ({ id, prevHash, component, nonce, hash }) => {
    useEffect(() => {
        console.log({ hash })
    })
    return (
        <div className="block">
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-macos">
                <li className="dropdown-item d-flex justify-content-between align-items-center list-item">
                    ID: {id}
                </li>
                <li className="dropdown-item d-flex justify-content-between align-items-center list-item wrap-anywhere">
                    PrevHash: {prevHash}
                    <span className="badge bg-primary rounded-pill">Change me!</span>
                </li>
                <li className="dropdown-item d-flex justify-content-between align-items-center list-item">
                    Nonce: {nonce}
                    <span className="badge bg-primary rounded-pill">Change me!</span>
                </li>
                <li className="dropdown-item d-flex justify-content-center align-items-center list-item">
                    {component}
                </li>
                <li className="dropdown-item d-flex justify-content-between align-items-center list-item wrap-anywhere">
                    Hash: {hash}
                    <span className="badge bg-primary rounded-pill">Change me!</span>
                </li>
            </ul>
        </div>
    );
}

export default Block;