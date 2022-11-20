import "./Project.css";

const Project = ({ link, title, desc, color, web = undefined }) => {
    const cardProperty = `card ${color} my-card`;
    const liveButton = (web !== undefined) ?
        <a href={web} className="btn btn-primary my-btn" target="_blank" rel="noreferrer" style={{ margin: 4 }}>Live</a> :
        undefined
    return (
        <div className={cardProperty} >
            <div className='text-container'>
                <h6 className="card-title">{title}</h6>
                <p className="card-text">{desc}</p>
            </div>
            <a href={link} className="btn btn-primary my-btn" target="_blank" rel="noreferrer" style={{ margin: 4 }}>Go to project</a>
            {liveButton}
        </div>
    )
}

export default Project;