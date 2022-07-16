import "./Project.css";

const Project = ({ link, title, desc, color }) => {
    const cardProperty = `card ${color} my-card`;
    return (
        <div className={cardProperty} >
            <div className='text-container'>
                <h6 className="card-title">{title}</h6>
                <p className="card-text">{desc}</p>
            </div>
            <a href={link} className="btn btn-primary my-btn" target="_blank">Go to project</a>
        </div>
    )
}

export default Project;