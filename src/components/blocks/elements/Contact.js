
const Contact = ({ link, color, logo }) => {
    const classProperty = `btn ${color}`;
    return (
        <a href={link} className={classProperty} style={{ margin: "2px" }} target="_blank" rel="noreferrer">
            {logo}
        </a>
    );
}

export default Contact;