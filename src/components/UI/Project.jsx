/* eslint-disable react/prop-types */
export default function Project({ project }) {
    const cardStyle = {
        backgroundColor: '#596774',
        color: 'white',
        // width: '50rem',
        padding: '10px',
        margin: '10px'
    }

    function handleWebsiteClick() {
        window.open(project.url, '_blank');
    }

    function handleGitHubClick() {
        window.open(project.repo, '_blank');
    }

    return (
        <div style={cardStyle}>
            <img src={project.image.src} className="card-img-top" alt={project.image.alt}></img>
            <div className="card-body">
                <h5 className="card-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href={project.url} style={{ color: 'white' }}>{project.name}</a>
                    {/* <a href={project.repo}><img src='/assets/github.svg' alt="github icon" style={{ width: '25px', height: '25px'}}></img></a> */}
                </h5>
                <p className="card-text">{project.description}</p>
                <div className="card-buttons">
                    <button type="button" className="btn btn-primary me-4" onClick={handleWebsiteClick}>WEBSITE</button>
                    <button type="button" className="btn btn-primary" onClick={handleGitHubClick}><img src='/assets/github.svg' alt="github icon" style={{ width: '25px', height: '25px'}}></img> GITHUB</button>
                </div>
            </div>
        </div>
    );
}