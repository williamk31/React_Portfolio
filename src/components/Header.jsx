import Nav from './Nav';

export default function Header() {
    return(
        <header className="d-flex flex-wrap justify-content-between align-items-center py-1 px-5 mb-4 border-bottom">
            <div className="d-flex align-items-center ms-3">
                <img src="/assets/initials.png" alt="initials"></img>
            </div>
            <Nav />
        </header>
    );
}