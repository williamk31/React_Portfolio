export default function Resume() {

    function handleResumeDownload() {
        const link = document.createElement('a');
        link.href = '/assets/William_Kalish_resume.pdf';
        link.download = 'William_Kalish_resume.pdf';
        link.click();
    }

    return (
        <div className="container">
            <div className="section-header">
                <h1>Resume</h1>
                <button type="button" className="btn btn-primary btn-resume" onClick={handleResumeDownload}>DOWNLOAD RESUME</button>
            </div>
            <div className="row">

                <div className="col">
                    <div className="left-column">
                        <h4>Summary</h4>
                        <p>Full Stack Web Developer with a degree in Psychology and Linguistics and extensive management and guest service experience. Detail-oriented and a skilled problem-solver.</p>
                        <p>Avidly outdoors; adventurous; up for a challenge.</p>
                    </div>
                    <div className="left-column">
                        <h4>Technical Skills</h4>
                        <p><strong>Languages:</strong> HTML, CSS, JavaScript, SQL
                            <br></br>
                            <strong>Applications:</strong> Node.js, Express.js, React.js, Bootstrap, Postgres, Sequelize, MongoDB, handlebars, JQuery, GraphQL
                            <br></br>
                            <strong>Developer Tools:</strong> VSCode, Insomnia, Git, GitHub, GitLab</p>
                    </div>
                    <div className="left-column">
                        <h4>Education</h4>
                        <p><strong>University of Denver/EdX</strong> / Full Stack Web Development Boot Camp Certificate</p>
                        <p><strong>Brandeis University</strong> / BA in Psychology and Linguistics</p>
                    </div>
                </div>
                <div className="col">
                    <div className="right-column">
                        <h4>Experience</h4>
                        <h5><strong>Purgatory Resort</strong> / Guest Services Systems Manager</h5>
                        <h6>January 2024 - Present</h6>
                        <p>Spearhead the successful integration of diverse third-party web applications with the resort’s POS system, including the development of custom features designed to maximize sales and streamline operations.
                            <br></br>
                            Collaborate closely with managers across all revenue-generating departments to ensure seamless functionality and optimal performance within overall resort operations.
                            <br></br>
                            Oversee the interface between software systems and end-users, continuously enhancing the guest experience through innovative solutions.<br></br>
                            Design and implement custom data searches using tools like Looker and SQL, enabling data-driven decision-making across various departments to improve business outcomes.
                        </p>
                        <h5><strong>Purgatory Resort</strong> / Kids Ski and Snowboard School Manager</h5>
                        <h6>December 2018 - January 2024</h6>
                        <p>Produce an exceptionally high-quality product, focused on guest satisfaction while driving labor costs down through efficient scheduling practices.
                            <br></br>
                            Balance the needs of over 150 instructors with the needs of our guests and the goals of upper management with compassion and strong communication, to the satisfaction of all stakeholders.
                            <br></br>
                            Oversee professional development curriculum specifically tailored to the success of resort programs and adherence to policies and procedures.
                            <br></br>
                            Recruit, interview, and onboard new staff at the beginning of and throughout each season; train new staff to perform at high standards.
                            <br></br>
                            Work with a team to achieve the appropriate balance between revenue and payroll expenses within our department.
                        </p>
                    </div>
                </div>
                <div>
                <button type="button" className="btn btn-primary btn-resume-mobile d-md-none mt-3" onClick={handleResumeDownload}>DOWNLOAD RESUME</button>
                </div>
            </div>
        </div>
    )
}