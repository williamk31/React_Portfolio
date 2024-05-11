import Nav from './Nav';

export default function Header() {
    return(
        <header className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom bg-light">
            <div className="d-flex align-items-center ms-3">
                <img src="src/assets/Profile-picture.jpg" alt="profile-picture" className="rounded-circle me-3" style={{ width: '150px', height: '150px' }}></img>
                <span className="fs-1 ms-3">William Kalish</span>
            </div>
            <Nav />
        </header>
    );
}