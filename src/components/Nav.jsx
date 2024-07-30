import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Navbar from './UI/Navbar';

export default function Nav() {
    // const currentPage = useLocation().pathname;

    return (
        <Navbar 
            links={[
                <Link key={1} className='nav-link' to="resume" spy={true} smooth={true} duration={500}>
                    RESUME
                </Link>,
                <Link key={2} className='nav-link' to="portfolio" spy={true} smooth={true} duration={500}>
                    PORTFOLIO
                </Link>,
                <Link key={3} className='nav-link' to="contact" spy={true} smooth={true} duration={500}>
                    CONTACT
                </Link>, 
            ]}
        />
    );
}
