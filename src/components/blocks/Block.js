import 'bootstrap/dist/css/bootstrap.min.css';
import './Block.css';

const Block = ({ id, prevHash, currentState, nonce, hash, globalCurr }) => {
    const classProperty = globalCurr === currentState ? 'block carousel-item active' : 'block carousel-item';
    return (
        <main className={classProperty}>
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
                    {currentState}
                </li>
                <li className="dropdown-item d-flex justify-content-between align-items-center list-item wrap-anywhere">
                    Hash: {hash}
                    <span className="badge bg-primary rounded-pill">Change me!</span>
                </li>
            </ul>
        </main>
    );
}

export default Block;