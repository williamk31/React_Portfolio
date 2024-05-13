import Project from '../components/UI/Project'
import projects from '../projects'

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {projects.map((project) =>(
                        <Project key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </div>
    )
}