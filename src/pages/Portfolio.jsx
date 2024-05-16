import Project from '../components/UI/Project'
import projects from '../projects'
import { useState } from 'react';

export default function Portfolio() {
    const [index, setIndex] = useState(0);

    let hasPrev = index > 0;
    let hasNext = index < projects.length - 1;

    function handleNextClick(){
        if(hasNext) {
            setIndex(index + 1);
        }
    }

    function handlePrevClick(){
        if(hasPrev) {
            setIndex(index - 1);
        }
    }

    let project = projects[index];

    return (
        <div className="container">
            <h1>Portfolio</h1>
            <div className="project-card">
                <button
                        className="btn btn-outline-dark btn-previous project-buttons"
                        onClick={handlePrevClick}
                        disabled={!hasPrev}
                        >
                           <span className="material-symbols-outlined">
                            arrow_back_ios
                            </span>
                    </button>
                <div className="project-content">
                        <Project key={project.id} project={project}/>
                </div>
                    <button
                        className="btn btn-outline-dark btn-next project-buttons"
                        onClick={handleNextClick}
                        disabled={!hasNext}
                        >
                          <span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </button>
            </div>
        </div>
    )
}