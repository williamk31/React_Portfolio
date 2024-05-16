export default function Footer() {
    return (
        <footer className="bg-light fixed-bottom text-center py-3">
            <div className="container">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a className="navbar-brand" href="https://www.github.com/williamk31">
                            <img src="src/assets/github.svg" alt="GitHub" style={{ width: '30px', height: '30px'}}></img>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="navbar-brand" href="https://www.linkedin.com/in/william-kalish/">
                            <img src="src/assets/linkedin.svg" alt="LinkedIn" style={{ width: '30px', height: '30px'}}></img>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="navbar-brand" href="mailto:williamk31@gmail.com">
                            <img src="src/assets/envelope-solid.svg" alt="Email" style={{ width: '30px', height: '30px'}}></img>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}