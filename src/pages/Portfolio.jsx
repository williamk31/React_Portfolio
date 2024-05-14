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
        <div>
            <h1>Portfolio</h1>
            <div className="container">
                <button
                    onClick={handlePrevClick}
                    disabled={!hasPrev}
                    >
                        Previous
                </button>
                <button
                    onClick={handleNextClick}
                    disabled={!hasNext}
                    >
                        Next
                </button>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        <Project key={project.id} project={project}/>
                </div>
            </div>
        </div>
    )
}