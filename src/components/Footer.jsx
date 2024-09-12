export default function Footer() {
    return (
        <footer className="bg-light text-center py-5">
            <div className="container">
                <button className="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Back to top</button>
            </div>
        </footer>
    )
}