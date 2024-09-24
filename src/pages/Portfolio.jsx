import Project from '../components/UI/Project'
import projects from '../projects'
import { useState } from 'react';
// import NextIcon from '..assets/right_arrow.png';
// import PrevIcon from '..assets/left_arrow.png';

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
        <div className="portfolio">
            <div className="container">
                <div className="section-header-dark">
                    <h1>Portfolio</h1>
                </div>
                <div className="project-card d-flex flex-column flex-md-row align-items-center">
                    <button
                        className="btn btn-previous project-buttons"
                        onClick={handlePrevClick}
                        disabled={!hasPrev}
                        >
                           <span>
                            <img src="/assets/left_arrow.svg" alt="left arrow" style={{ width: '72px', height: '36px' }}></img>
                            </span>
                    </button>
                <div className="project-content">
                        <Project key={project.id} project={project}/>
                </div>
                    <button
                        className="btn btn-next project-buttons"
                        onClick={handleNextClick}
                        disabled={!hasNext}
                        >
                          <span>
                            <img src="/assets/right_arrow.svg" alt="right arrow" style={{ width: '72px', height: '36px' }}></img>
                        </span>
                    </button>
                </div>
                <div className="project-buttons-mobile d-flex justify-content-center d-md-none mt-3">
                    <button
                        className="btn btn-previous mx-2"
                        onClick={handlePrevClick}
                        disabled={!hasPrev}
                        >
                        <span>
                            <img src="/assets/left_arrow.svg" alt="left arrow" style={{ width: '72px', height: '36px' }}></img>
                        </span>
                    </button>
                    <button
                        className="btn btn-next mx-2"
                        onClick={handleNextClick}
                        disabled={!hasNext}
                        >
                        <span>
                            <img src="/assets/right_arrow.svg" alt="right arrow" style={{ width: '72px', height: '36px' }}></img>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}