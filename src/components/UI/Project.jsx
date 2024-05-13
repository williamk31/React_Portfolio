/* eslint-disable react/prop-types */
export default function Project({ project }) {
    const cardStyle = {
        backgroundColor: 'lightblue',
        width: '18rem',
        padding: '10px',
        margin: '10px'
    }

    return (
        <div className="card" style={cardStyle}>
            <img src={project.image.src} className="card-img-top" alt={project.image.alt}></img>
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
            </div>
        </div>
    );
}