import "./Project.css";

const Project = ({ link, title, desc, color, web = undefined }) => {
    const cardProperty = `card ${color} my-card`;
    const liveButton = (web !== undefined) ?
        <a href={web} className="btn btn-success my-btn" target="_blank" rel="noreferrer" style={{ margin: 4 }}>Live</a> :
        <a href={link} className="btn btn-secondary my-btn" target="_blank" rel="noreferrer" style={{ margin: 4 }}>Only Repo</a>
    return (
        <div className={cardProperty} >
            <div className='text-container'>
                <h6 className="card-title">{title}</h6>
                <p className="card-text">{desc}</p>
            </div>
            <div className="buttons-group">
                {liveButton}
                <a href={link} className="btn btn-primary my-btn" target="_blank" rel="noreferrer" style={{ margin: 4 }}>Go to project</a>
            </div>
        </div>
    )
}

export default Project;