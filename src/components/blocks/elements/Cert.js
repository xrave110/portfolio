import "./Cert.css";

const Cert = ({ link, title, desc, color }) => {
    const cardProperty = `card ${color} my-card`;
    return (
        <div className={cardProperty} >
            <div className="card-body">
                <h6 className="card-title cert-tittle">{title}</h6>
                <p className="card-text cert-text">{desc}</p>
            </div>
            <a href={link} className="btn btn-warning my-btn" target="_blank">Open Certificate</a>
        </div>
    )
}

export default Cert;